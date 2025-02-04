document.addEventListener("DOMContentLoaded", function () {
  // Créer la popup dynamiquement
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.style.display = "none"; // Caché au départ
  modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h5 id="modal-title"></h5>
            <p id="modal-text"></p>
        </div>
    `;
  document.body.appendChild(modal);

  // Sélectionne tous les boutons "En savoir plus"
  document.querySelectorAll(".learnmore").forEach((button) => {
    button.addEventListener("click", function () {
      // Trouver la carte parente
      const card = this.closest("div[data-title]");

      // Vérifier que la carte existe et possède les attributs data-title et data-text
      if (card) {
        const title = card.getAttribute("data-title");
        const text = card.getAttribute("data-text");

        // Mettre à jour le contenu du popup
        document.getElementById("modal-title").textContent = title;
        document.getElementById("modal-text").textContent = text;

        // Afficher la popup
        modal.style.display = "flex";
      }
    });
  });

  // Gérer la fermeture de la popup
  modal.querySelector(".close-btn").addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Fermer la popup en cliquant en dehors du contenu
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
