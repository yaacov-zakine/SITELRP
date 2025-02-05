function estimerPrix(area, treatment, name) {
  let prix = 0;

  if (treatment === "Dératisation") {
    if (area === "0 - 50 m2") {
      prix = 200;
    } else if (area === "51 - 100 m2") {
      prix = 250;
    } else {
      prix = 300;
    }
  } else if (treatment === "Désinsectisation") {
    if (area === "0 - 50 m2") {
      prix = 150;
    } else if (area === "51 - 100 m2") {
      prix = 180;
    } else {
      prix = 220;
    }
  } else if (treatment === "Désinfection") {
    if (area === "0 - 50 m2") {
      prix = 180;
    } else if (area === "51 - 100 m2") {
      prix = 240;
    } else {
      prix = 290;
    }
  } else {
    return "Type de traitement non valide";
  }

  return `Cher ${name}, le prix estimé pour une intervention sur une superficie de ${area} avec un traitement de ${treatment} est de ${prix}€.`;
}

document.addEventListener("DOMContentLoaded", function () {
  const priceButton = document.querySelector(".price");
  const estimationContainer = document.createElement("div");
  estimationContainer.style.textAlign = "center";
  estimationContainer.style.marginTop = "10px";
  estimationContainer.style.padding = "10px";
  estimationContainer.style.border = "1px solid #ccc";
  estimationContainer.style.borderRadius = "5px";
  estimationContainer.style.backgroundColor = "#cfb38e";
  estimationContainer.style.display = "none";
  estimationContainer.style.width = "50%";
  estimationContainer.style.margin = "10px auto";

  const formParent = document.querySelector("#form");

  priceButton.addEventListener("click", function () {
    let treatment = document.getElementById("treatment").value;
    let area = document.getElementById("area").value;
    let name = document.getElementById("name").value || "client";

    let estimation = estimerPrix(area, treatment, name);
    estimationContainer.innerText = estimation;
    estimationContainer.style.display = "block";
    console.log(formParent);
    console.log(estimationContainer);
    formParent.appendChild(estimationContainer);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById("app");

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "buttonsDevisFinal";

  const button = document.createElement("button");
  button.id = "devisButton";
  button.innerText = "Recevez votre devis";
  button.addEventListener("click", function () {
    document.getElementById("popup").style.display = "block";
  });

  buttonContainer.appendChild(button);
  app.appendChild(buttonContainer);

  const popup = document.createElement("div");
  popup.id = "popup";
  popup.className = "popup";
  popup.innerHTML = `
    <p>Vous recevrez un devis par mail sous 48h !</p>
    <button id="closePopup">OK</button>
  `;

  document.body.appendChild(popup);

  document.getElementById("closePopup").addEventListener("click", function () {
    popup.style.display = "none";
  });
});
