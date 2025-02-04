document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll("[data-title]"); // Sélectionne toutes les cartes avec un attribut data-title
  let activeCard = null; // Variable pour suivre la carte actuellement sélectionnée

  // Ajouter un événement de clic sur chaque carte
  cards.forEach((card) => {
    card.addEventListener("click", function (event) {
      event.stopPropagation(); // Empêche la fermeture immédiate

      // Vérifie si la carte cliquée est déjà active
      if (this === activeCard) {
        this.classList.remove("active");
        activeCard = null;
        return;
      }

      // Réinitialiser toutes les cartes avant d'activer celle-ci
      cards.forEach((c) => c.classList.remove("active"));

      // Activer l'animation pour la carte sélectionnée
      this.classList.add("active");
      activeCard = this;
    });
  });

  // Fermer la carte quand on clique en dehors
  document.addEventListener("click", function () {
    cards.forEach((card) => card.classList.remove("active"));
    activeCard = null;
  });

  // Ajouter dynamiquement des styles pour l'animation
  const style = document.createElement("style");
  style.innerHTML = `
        [data-title] {
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            position: relative;
            z-index: 1;
            cursor: pointer;
        }

        [data-title].active {
            transform: scale(1.2);
            z-index: 10;
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
        }
    `;
  document.head.appendChild(style);
});
