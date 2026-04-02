// SLIDER AUTOMATIQUE
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // change toutes les 3 secondes
}

// FORMULAIRE RENDEZ-VOUS
function prendreRDV(event) {
    event.preventDefault();
    document.getElementById("msg").innerText = "✅ Rendez-vous réservé avec succès !";
}

// CALCUL IMC
function calculIMC() {
    let poids = document.getElementById("poids").value;
    let taille = document.getElementById("taille").value;
    if(poids && taille) {
        let imc = poids / (taille * taille);
        document.getElementById("resultat").innerText = "Votre IMC : " + imc.toFixed(2);
    } else {
        alert("Veuillez entrer poids et taille !");
    }
}