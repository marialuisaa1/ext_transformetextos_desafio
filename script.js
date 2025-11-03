/* Programa - Modelo 1 */
window.document.addEventListener("DOMContentLoaded", function () {
  /* Botão letras Maiúsculas */
  window.document
    .querySelector("#btnMaiuscula")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#input-text").value;
      document.querySelector("#result-textarea").innerHTML =
        inputText.toUpperCase();
    });
  /* Botão Letra Minúscula */
  window.document
    .querySelector("#btnMinuscula")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#input-text").value;
      document.querySelector("#result-textarea").innerHTML =
        inputText.toLowerCase();
    });
  // Botão Primeira letra Maiúscula
  window.document
    .querySelector("#btnPrimeira")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#input-text").value.toLowerCase();
      let resultText = "";
      let colocarMaiuscula = true;

      for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];
        if (colocarMaiuscula && char.match(/[a-zà-ú]/i)) {
          resultText += char.toUpperCase();
          colocarMaiuscula = false;
        } else {
          resultText += char;
        }
        if (char === "." || char === "!" || char === "?") {
          colocarMaiuscula = true;
        }
      }
      document.querySelector("#result-textarea").innerHTML = resultText;
    });
  // Botão Limpar
  window.document
    .querySelector("#btnLimpar")
    .addEventListener("click", function () {
      document.querySelector("#input-text").value = "";
      document.querySelector("#result-textarea").innerHTML = "";
    });
  // Botão listar
  window.document
    .querySelector("#btnListar")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#input-text").value;
      let palavras = inputText.split(" ");
      document.querySelector("#result-textarea").innerHTML =
        palavras.join("\n");
    });
});
