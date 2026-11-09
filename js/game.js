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
  // Solo muestra el número de la capa
  layerTitle.textContent = `Capa ${layer.number}`;
  
  // Explicación didáctica + reto interactivo
  layerDescription.innerHTML = `
    <div style="background: #eef5fc; padding: 10px 14px; border-radius: 8px; margin-bottom: 12px; font-size: 0.95rem; line-height: 1.4; color: #1e3a8a;">
      <strong>¿Qué hace esta capa?</strong><br>${layer.summary}
    </div>
    <p style="margin: 8px 0; font-weight: 500;">${layer.challenge}</p>
  `;
  
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
    alert("¡Ups! Esa no era la capa correcta. Recuerda leer la pista arriba e inténtalo de nuevo.");
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
    <p>Has guiado con éxito la carta a través de las 7 capas del Modelo OSI.</p>
    <p>Puntaje final: <strong>${currentScore}</strong> / 70 puntos.</p>
  `;
  choicesContainer.innerHTML = `
    <button class="choice-btn" onclick="location.reload()">Jugar de Nuevo</button>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  loadQuestion(currentIndex);
});
