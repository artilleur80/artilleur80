var bouton1= document.getElementById("Id_btn1");
bouton1.addEventListener("click",clickbtn1);

function clickbtn1(){

    alert("Vous avez cliqué sur :\n Alert()");
}

var bouton2= document.getElementById("Id_btn2");
bouton2.addEventListener("click",clickbtn2);

function clickbtn2(){

    var nom = prompt("Veuillez saisir votre nom");
    if(nom==null){
    alert("Vous avez cliqué sur Annuler");
    return;
    }

    var prenom = prompt("Veuillez saisir votre prenom");
    if(prenom==null){
    alert("Vous avez cliqué sur Annuler");
    return;
    }  
    

    alert("bonjour :\n\n "+nom+"\n " +prenom);
}

var bouton3= document.getElementById("Id_btn3");
bouton3.addEventListener("click",clickbtn3);

function clickbtn3(){

    var reponse = confirm("Veuillez cliquer sur OK ou bien Annuler");
    if (reponse == true) {
        alert("Vous avez cliqué sur OK");
    } 
    else {
        alert("Vous avez cliqué sur Annuler");
    }

}

var bouton4= document.getElementById("Id_btn4");
bouton4.addEventListener("click",clickbtn4);

function clickbtn4(){

    var prenom = prompt("Veuillez saisir votre prénom");
    if(prenom==null){
        alert("Vous avez cliqué sur Annuler");
    }
    else{
        console.log("Voici le prénom que vous avez saisi: "+prenom);
        alert("Vérifiez en Console (F12), ce que vous venez de saisir...");
    }
}
