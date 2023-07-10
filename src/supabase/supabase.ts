import { createClient } from "@supabase/supabase-js";

const supabaseURL =     process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKEY =     process.env.NEXT_PUBLIC_SUPABASE_KEY;

if(!supabaseURL){
    throw new Error("Missing supabase URL.");
}

if(!supabaseKEY){
    throw new Error("Missing supabase KEY.");
}

const supabase = createClient(supabaseURL, supabaseKEY);

export default supabase;