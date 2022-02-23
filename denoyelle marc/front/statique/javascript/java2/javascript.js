

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
       
    var reponse = confirm("Etes vous un homme cliquer sur OK ou bien Annuler");
    if (reponse == true) {
        alert("bonjour monsieur :\n\n "+nom+"\n " +prenom);
        
    } 
    else {
        alert("Vous avez cliqué sur Annuler");
    }






    

    
}




    
    