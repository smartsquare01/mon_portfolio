document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Empêche le rechargement de la page

        // Récupérer les valeurs du formulaire
        const nom = document.getElementById("nom").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Simuler un envoi (affichage en console)
        console.log("Nom:", nom);
        console.log("Email:", email);
        console.log("Message:", message);

        // Affichage d'un message de confirmation
        alert("Merci pour votre message ! Je vous répondrai bientôt.");
        
        // Réinitialiser le formulaire
        form.reset();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Sélectionner les liens du menu
    const links = document.querySelectorAll("nav a");

    // Ajouter un événement pour chaque lien
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Empêche le rechargement de la page

            // Récupérer la cible (#accueil, #projets, #contact...)
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Faire défiler doucement vers la section
                targetSection.scrollIntoView({ behavior: "smooth" });

                // Mettre à jour l'URL sans recharger la page
                history.pushState(null, "", `#${targetId}`);
            }
        });
    });
});

