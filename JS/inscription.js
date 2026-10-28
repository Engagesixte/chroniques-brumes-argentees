const formulaireInscription =
    document.getElementById("formInscription");

formulaireInscription.addEventListener("submit", async (e) => {

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

   

    if(error){

    console.error(error);

    alert("Erreur Supabase");

    return;
}

localStorage.setItem(
    "prenom",
    prenom
);

localStorage.setItem(
    "genre",
    window.genreChoisi
);

window.location.href =
    "premier-chapitre/premier-chapitre-page1.html";


});