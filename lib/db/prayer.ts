import { getSql } from "@/lib/db";
import { createHash, randomBytes } from "crypto";

const PRAYER_IP_HASH_SALT = process.env.PRAYER_IP_HASH_SALT || "";

export type PrayerCategory = "healing" | "guidance" | "family" | "anxiety" | "salvation" | "other";

export interface PrayerRequestInput {
  name?: string | null;
  email?: string | null;
  consentToContact?: boolean;
  request: string;
  ipHash: string | null;
  category?: PrayerCategory | null;
}

export interface PrayerRequestResult {
  id: string;
  created_at: Date;
  ref_code: string;
}

/**
 * Hash an IP address with salt for privacy
 */
export function hashIp(ip: string): string {
  if (!PRAYER_IP_HASH_SALT) {
    console.warn("PRAYER_IP_HASH_SALT not set - using empty salt");
  }
  return createHash("sha256")
    .update(ip + PRAYER_IP_HASH_SALT)
    .digest("hex");
}

/**
 * Generate a reference code in format HM-XXXXXX (6 uppercase alphanumeric)
 */
function generateRefCode(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const bytes = randomBytes(6);
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars[bytes[i] % chars.length];
  }
  return `HM-${code}`;
}

/**
 * Count recent submissions from an IP hash (within last 10 minutes)
 */
export async function countRecentSubmissions(ipHash: string): Promise<number> {
  const sql = getSql();
  const result = await sql`
    SELECT COUNT(*) as count 
    FROM prayer_requests 
    WHERE ip_hash = ${ipHash} 
      AND created_at > NOW() - INTERVAL '10 minutes'
  `;
  return parseInt(result[0]?.count || "0", 10);
}

/**
 * Insert a prayer request into the database with retry on ref_code conflict
 */
export async function insertPrayerRequest(
  input: PrayerRequestInput
): Promise<PrayerRequestResult> {
  const sql = getSql();
  
  // Only store consent as true if email is provided AND consent is true
  const consentToContact =
    input.email && input.email.trim() !== "" && input.consentToContact === true;

  const maxRetries = 5;
  
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    const refCode = generateRefCode();
    
    try {
      const result = await sql`
        INSERT INTO prayer_requests (name, email, consent_to_contact, request, ip_hash, category, ref_code)
        VALUES (
          ${input.name || null},
          ${input.email || null},
          ${consentToContact},
          ${input.request},
          ${input.ipHash},
          ${input.category || null},
          ${refCode}
        )
        RETURNING id, created_at, ref_code
      `;

      return {
        id: result[0].id,
        created_at: result[0].created_at,
        ref_code: result[0].ref_code,
      };
    } catch (error) {
      // Check if it's a unique constraint violation on ref_code
      const isUniqueViolation = 
        error instanceof Error && 
        error.message.includes("idx_prayer_requests_ref_code");
      
      if (!isUniqueViolation || attempt === maxRetries - 1) {
        throw error;
      }
      // Otherwise retry with a new ref_code
    }
  }

  // Should not reach here, but TypeScript needs this
  throw new Error("REF_FAILED");
}
