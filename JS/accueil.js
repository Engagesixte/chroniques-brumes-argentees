const video =
document.getElementById("livreVivant");

video.playbackRate = 1;

window.genreChoisi = "";


const btnGarcon =
document.getElementById("btnGarcon");

const btnFille =
document.getElementById("btnFille");

const form =
document.getElementById("formInscription");

const titre =
document.getElementById("titreChoix");

btnGarcon.addEventListener("click", () => {

    window.genreChoisi = "garcon";

    document.querySelector(
        ".intro-container"
    ).style.display = "none";

    document.querySelector(
        ".choix-personnage"
    ).style.display = "none";

    titre.textContent =
        "Bienvenue, Porteur des Brumes";

    form.style.display = "block";

});

btnFille.addEventListener("click", () => {

    window.genreChoisi = "fille";

    document.querySelector(
        ".intro-container"
    ).style.display = "none";

    document.querySelector(
        ".choix-personnage"
    ).style.display = "none";

    titre.textContent =
        "Bienvenue, Porteuse des Brumes";

    form.style.display = "block";

});

alert("Envoi du formulaire");