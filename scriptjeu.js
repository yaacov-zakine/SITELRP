document.addEventListener("DOMContentLoaded", function () {
  let clickCount = 0;
  let timeLeft = 10; // Bloquer l'utilisateur après 10 secondes
  let gameStarted = false;
  let timer;
  const requiredClicks = 30;
  const promoCode = "TUESTUNRAT";

  const image = document.getElementById("clickable-image");
  const message = document.getElementById("message");
  const timerDisplay = document.getElementById("timer");
  const clickCounter = document.getElementById("click-count");

  function startGame() {
    if (gameStarted) return;
    gameStarted = true;
    clickCount = 0;
    timeLeft = 10;
    clickCounter.textContent = clickCount;
    timerDisplay.textContent = timeLeft;
    message.textContent = "";

    timer = setInterval(() => {
      timeLeft--;
      timerDisplay.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timer);
        endGame();
      }
    }, 1000);
  }

  function endGame() {
    gameStarted = false;
    image.removeEventListener("click", countClick);
    if (clickCount >= requiredClicks) {
      message.textContent = `Bravo ! Voici votre code promo : ${promoCode}`;
    } else {
      message.textContent = "Dommage ! Vous n'avez pas obtenu le code promo.";
    }
  }

  function countClick() {
    if (!gameStarted) startGame();
    clickCount++;
    clickCounter.textContent = clickCount;
  }

  image.addEventListener("click", countClick);
});
