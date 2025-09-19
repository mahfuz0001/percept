import{createClient}from'@supabase/supabase-js'

constsupabaseUrl=process.env.NEXT_PUBLIC_SUPABASE_URL!
constsupabaseAnonKey=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

exportconstsupabase=createClient(supabaseUrl,supabaseAnonKey)