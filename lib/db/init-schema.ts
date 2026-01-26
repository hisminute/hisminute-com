import { neon } from "@neondatabase/serverless";

/**
 * Initialize the prayer_requests table schema.
 * Safe to run multiple times - uses IF NOT EXISTS.
 * 
 * Usage:
 * - Dev: Run automatically on first API call (guarded)
 * - Prod: Run manually via: npx tsx lib/db/init-schema.ts
 */
export async function initPrayerSchema(): Promise<void> {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL environment variable is not set");
  }
  
  const sql = neon(databaseUrl);

  // Ensure pgcrypto extension
  await sql`CREATE EXTENSION IF NOT EXISTS pgcrypto`;

  // Create table
  await sql`
    CREATE TABLE IF NOT EXISTS prayer_requests (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'prayed', 'archived')),
      name TEXT NULL,
      email TEXT NULL,
      consent_to_contact BOOLEAN NOT NULL DEFAULT FALSE,
      request TEXT NOT NULL,
      prayed_at TIMESTAMPTZ NULL,
      archived_at TIMESTAMPTZ NULL,
      ip_hash TEXT NULL
    )
  `;

  // Create indexes
  await sql`
    CREATE INDEX IF NOT EXISTS idx_prayer_requests_created_at 
    ON prayer_requests (created_at DESC)
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS idx_prayer_requests_status_created 
    ON prayer_requests (status, created_at DESC)
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS idx_prayer_requests_ip_hash_created 
    ON prayer_requests (ip_hash, created_at DESC)
  `;

  console.log("Prayer schema initialized successfully");
}

// Allow running directly: npx tsx lib/db/init-schema.ts
if (require.main === module) {
  initPrayerSchema()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("Failed to init schema:", err);
      process.exit(1);
    });
}
