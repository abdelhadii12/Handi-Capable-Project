// Carrousel automatique
let currentIndex = 0;
const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showNextItem() {
    currentIndex = (currentIndex + 1) % totalItems;
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

// Défilement automatique toutes les 5 secondes
setInterval(showNextItem, 4000);

// Gestion du formulaire de contact (si présent sur la page)
if (document.getElementById('contactForm')) {
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Empêche l'envoi du formulaire

        // Récupération des champs
        const nom = document.getElementById('nom').value.trim();
        const prenom = document.getElementById('prenom').value.trim();
        const messageDiv = document.getElementById('message');

        // Validation des champs obligatoires
        if (nom === '' || prenom === '') {
            messageDiv.textContent = 'Veuillez remplir tous les champs obligatoires.';
            messageDiv.className = 'error';
        } else {
            // Message de succès
            messageDiv.textContent = 'Merci, votre message a été envoyé avec succès !';
            messageDiv.className = 'success';

            // Stocker le message de confirmation dans localStorage
            localStorage.setItem('formMessage', 'Votre formulaire a bien été envoyé !');

            // Redirection vers la page d'accueil après 3 secondes
            setTimeout(function () {
                window.location.href = 'index.html';
            }, 2000);
        }
    });
}

// Afficher le message de confirmation après la redirection
const confirmationMessage = localStorage.getItem('formMessage');
if (confirmationMessage) {
    const messageDiv = document.getElementById('confirmationMessage');
    messageDiv.textContent = confirmationMessage;
    messageDiv.className = 'success';
    localStorage.removeItem('formMessage'); // Supprimer le message après affichage
}