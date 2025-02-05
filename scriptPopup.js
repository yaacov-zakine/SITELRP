document.addEventListener("DOMContentLoaded", function () {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.style.display = "none";
  modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h5 id="modal-title"></h5>
            <p id="modal-text"></p>
        </div>
    `;
  document.body.appendChild(modal);

  document.querySelectorAll(".learnMore").forEach((button) => {
    button.addEventListener("click", function () {
      const card = this.closest("div[data-title]");

      if (card) {
        const title = card.getAttribute("data-title");
        const text = card.getAttribute("data-text");

        document.getElementById("modal-title").textContent = title;
        document.getElementById("modal-text").textContent = text;

        modal.style.display = "flex";
      }
    });
  });

  modal.querySelector(".close-btn").addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
