document
.getElementById("corriger")
.addEventListener("click", verifierQuiz);

function verifierQuiz(){

    let score = 0;

    const reponses = {
        q1:"b",
        q2:"c",
        q3:"b",
        q4:"d",
        q5:"b"
    };

    for(const question in reponses){

        const choix =
        document.querySelector(
            `input[name="${question}"]:checked`
        );

        if(
            choix &&
            choix.value === reponses[question]
        ){
            score++;
        }
    }

    const resultat =
    document.getElementById("resultat");

    if(score === 5){

        localStorage.setItem(
            "chapitre1Valide",
            "true"
        );

        localStorage.setItem(
            "medaillonBrumes",
            "true"
        );

        resultat.innerHTML = `
            <p>
            🏅 Médaillon des Brumes obtenu !
            </p>

            <p>
            Score : ${score}/5
            </p>
            <a class="btn-chapitre" href="../deuxieme-chapitre/deuxieme-chapitre-page4.html">
                Accéder au chapitre 2
            </a>
        `;

    }else{

        resultat.innerHTML = `
            <p>
            Score : ${score}/5
            </p>

            <p>
            Relis attentivement le chapitre avant de poursuivre.
            </p>
        `;
    }
}