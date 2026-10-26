console.log("Chargement de supabase.js");

const supabaseUrl =
"https://ntbbqfeworiotrirweid.supabase.co/";

const supabaseKey =
"sb_publishable_aTSzhCqQH2ATEcpDUZcmjg_nyCPsB-A";

const supabaseClient =
supabase.createClient(
    supabaseUrl,
    supabaseKey
);

console.log("Supabase connecté");
console.log("supabase.js chargé");