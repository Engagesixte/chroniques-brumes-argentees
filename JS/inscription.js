console.log("inscription.js chargé");

const form = document.getElementById("formInscription");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const prenom =
        document.getElementById("prenom").value;

    const { data, error } =
        await supabaseClient
            .from("lecteurs")
            .insert([
                {
                    prenom: prenom,
                    genre: window.genreChoisi
                }
            ])
            .select();

    if(error){

        console.error(error);

        alert("Erreur Supabase");

        return;
    }

    console.log(data);

    alert("Bienvenue " + prenom);

});