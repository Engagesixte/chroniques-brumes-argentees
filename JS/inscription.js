const formulaire =
    document.getElementById("formInscription");

formulaire.addEventListener("submit", async (e) => {

    e.preventDefault();

    const prenom =
        document.getElementById("prenom").value;

    console.log("Prénom :", prenom);
    console.log("Genre :", window.genreChoisi);

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