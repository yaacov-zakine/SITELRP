document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll("[data-title]");
  let activeCard = null;

  cards.forEach((card) => {
    card.addEventListener("click", function (event) {
      event.stopPropagation();

      if (this === activeCard) {
        this.classList.remove("active");
        activeCard = null;
        return;
      }

      cards.forEach((c) => c.classList.remove("active"));

      this.classList.add("active");
      activeCard = this;
    });
  });

  document.addEventListener("click", function () {
    cards.forEach((card) => card.classList.remove("active"));
    activeCard = null;
  });

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
