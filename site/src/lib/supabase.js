
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://rathqhufdejjehkdxfuy.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdGhxaHVmZGVqamVoa2R4ZnV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4MDk4ODIsImV4cCI6MjAwNjM4NTg4Mn0.AnTJfrt8mgtwdg2WTxaMSRrdCmgAgphpvub78irJRKA')