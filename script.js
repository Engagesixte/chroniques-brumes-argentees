const prenoms = document.querySelectorAll(".prenom");

for(let i = 0; i<prenoms.length; i++)
    prenoms[i].textContent = "Laura";

let score = 0;

function validerReponse() {
    
    const reponse = document.getElementById("reponse").value;
   
    console.log(reponse);

    if (reponse === "chat"){
        score++
        console.log("Bonne réponse");
    }else{
        console.log("Recommence");
    }
  document.getElementById("resultat").textContent =
    "Score : " + score + "/3";
}
