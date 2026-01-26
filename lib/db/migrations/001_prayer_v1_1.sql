-- Prayer v1.1 Schema Update
-- Run this manually in Neon console

-- Add category column (optional)
ALTER TABLE prayer_requests 
ADD COLUMN IF NOT EXISTS category TEXT NULL;

-- Add ref_code column (optional, for existing rows)
ALTER TABLE prayer_requests 
ADD COLUMN IF NOT EXISTS ref_code TEXT NULL;

-- Add partial unique index on ref_code (only where not null)
CREATE UNIQUE INDEX IF NOT EXISTS idx_prayer_requests_ref_code 
ON prayer_requests (ref_code) 
WHERE ref_code IS NOT NULL;
