
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://rathqhufdejjehkdxfuy.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdGhxaHVmZGVqamVoa2R4ZnV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDgwOTg4MiwiZXhwIjoyMDA2Mzg1ODgyfQ.p0TWH7ENfc8r1cgE1pQj2n380KaF1_5JSVlod1V645U')