let currentIndex = 0;
let currentScore = 0;

const layerGraphic = document.getElementById("layer-graphic");
const layerTitle = document.getElementById("layer-title");
const layerDescription = document.getElementById("layer-description");
const choicesContainer = document.getElementById("choices-container");
const currentLevelText = document.getElementById("current-level");
const scoreText = document.getElementById("score");

function loadQuestion(index) {
  const layer = osiLayers[index];
  
  layerGraphic.textContent = layer.icon;
  layerTitle.textContent = `${layer.name}: ${layer.simpleTitle}`;
  layerDescription.textContent = `${layer.story} — ${layer.challenge}`;
  currentLevelText.textContent = index + 1;
  
  choicesContainer.innerHTML = "";
  
  layer.options.forEach((optionText, i) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = optionText;
    btn.onclick = () => checkAnswer(i, layer.correctIndex);
    choicesContainer.appendChild(btn);
  });
}

function checkAnswer(selected, correct) {
  if (selected === correct) {
    currentScore += 10;
    scoreText.textContent = currentScore;
    alert("¡Correcto! El paquete avanza a la siguiente capa.");
  } else {
    alert("¡Ups! Esa no era la capa correcta. Inténtalo de nuevo.");
  }

  currentIndex++;
  if (currentIndex < osiLayers.length) {
    loadQuestion(currentIndex);
  } else {
    finishGame();
  }
}

function finishGame() {
  document.getElementById("story-box").innerHTML = `
    <h2>🎉 ¡Misión Cumplida!</h2>
    <p>El mensaje ha viajado con éxito por las 7 capas del Modelo OSI.</p>
    <p>Puntaje final: <strong>${currentScore}</strong> puntos.</p>
  `;
  choicesContainer.innerHTML = `
    <button class="choice-btn" onclick="location.reload()">Volver a Jugar</button>
  `;
}

// Iniciar al cargar
document.addEventListener("DOMContentLoaded", () => {
  loadQuestion(currentIndex);
});
