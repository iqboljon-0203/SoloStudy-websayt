import { createClient } from "@supabase/supabase-js";

// Supabase URL and Key should be set in environment variables
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Supabase URL or Key is not set. Please set REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_KEY in your .env file."
  );
}

let supabase = null;
if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export { supabase };
