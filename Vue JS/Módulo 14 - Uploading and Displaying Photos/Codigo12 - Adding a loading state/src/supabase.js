
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "YOUR SUPABASE URL HERE"
const supabaseKey = "YOUR SUPABASE KEY HERE"

export const supabase = createClient(supabaseUrl, supabaseKey)