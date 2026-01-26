-- Prayer Requests Schema
-- Run this SQL once to initialize the prayer_requests table.
-- Safe to run multiple times (uses IF NOT EXISTS).

-- Ensure pgcrypto extension is available for gen_random_uuid
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Create prayer_requests table
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
);

-- Indexes for efficient querying
CREATE INDEX IF NOT EXISTS idx_prayer_requests_created_at 
  ON prayer_requests (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_prayer_requests_status_created 
  ON prayer_requests (status, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_prayer_requests_ip_hash_created 
  ON prayer_requests (ip_hash, created_at DESC);
