const imageLettre = document.getElementById("ouvrirVideo");
const popupVideo = document.getElementById("popupVideo");
const videoLettre = document.getElementById("videoLettre");
const fermerPopup = document.querySelector(".fermer-popup");

if(imageLettre){

    imageLettre.addEventListener("click", () => {

        popupVideo.style.display = "flex";

        videoLettre.currentTime = 0;
        videoLettre.play();

    });

}

if(fermerPopup){

    fermerPopup.addEventListener("click", () => {

        popupVideo.style.display = "none";
        videoLettre.pause();

    });

}

if(popupVideo){

    popupVideo.addEventListener("click", (e) => {

        if(e.target === popupVideo){

            popupVideo.style.display = "none";
            videoLettre.pause();

        }

    });

}