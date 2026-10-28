const video =
document.getElementById("livreVivant");

video.playbackRate = 1;

const formulaire =
document.getElementById("formInscription");

const titre =
document.getElementById("titreChoix");

const cartes =
document.querySelectorAll(".carte-heros");

cartes.forEach(carte => {

    carte.addEventListener("click", () => {

        const genre =
        carte.dataset.genre;

        window.genreChoisi = genre;

        document.querySelector(
            ".intro-container"
        ).style.display = "none";

        document.querySelector(
            ".choix-heros"
        ).style.display = "none";

        formulaire.style.display = "block";

        titre.textContent =
            genre === "garcon"
            ? "Bienvenue, Porteur des Brumes"
            : "Bienvenue, Porteuse des Brumes";

    });

});