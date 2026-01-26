import { getSql } from "@/lib/db";
import { createHash } from "crypto";

const PRAYER_IP_HASH_SALT = process.env.PRAYER_IP_HASH_SALT || "";

export interface PrayerRequestInput {
  name?: string | null;
  email?: string | null;
  consentToContact?: boolean;
  request: string;
  ipHash: string | null;
}

export interface PrayerRequestResult {
  id: string;
  created_at: Date;
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
 * Insert a prayer request into the database
 */
export async function insertPrayerRequest(
  input: PrayerRequestInput
): Promise<PrayerRequestResult> {
  const sql = getSql();
  
  // Only store consent as true if email is provided AND consent is true
  const consentToContact =
    input.email && input.email.trim() !== "" && input.consentToContact === true;

  const result = await sql`
    INSERT INTO prayer_requests (name, email, consent_to_contact, request, ip_hash)
    VALUES (
      ${input.name || null},
      ${input.email || null},
      ${consentToContact},
      ${input.request},
      ${input.ipHash}
    )
    RETURNING id, created_at
  `;

  return {
    id: result[0].id,
    created_at: result[0].created_at,
  };
}
