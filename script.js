let isClicked = false;

// Seleciona todos os elementos com a classe "botao"
document.querySelectorAll(".mais").forEach((botao) => {
  botao.addEventListener("click", function () {
    let idClicado = this.id; // Obtém o ID do botão clicad

    // Aqui você pode modificar uma variável específica
    aumentarValor(idClicado);
  });
});

// Seleciona todos os elementos com a classe "botao"
document.querySelectorAll(".menos").forEach((botao) => {
  botao.addEventListener("click", function () {
    let idClicado = this.id; // Obtém o ID do botão clicado
    console.log("Botão clicado:", idClicado);

    // Aqui você pode modificar uma variável específica
    subtraiValor(idClicado);
  });
});

//=================================================================

function aumentarValor(id) {
  let currentWidth = "";
  let cor;

  if (id === "mais_js") {
    cor = "--width-verde";
    // Pega o valor atual de --width-verde
    currentWidth = getComputedStyle(document.documentElement)
      .getPropertyValue(cor)
      .trim();
  } else if (id === "mais_react") {
    cor = "--width-amarelo";
    // Pega o valor atual de --width-verde
    currentWidth = getComputedStyle(document.documentElement)
      .getPropertyValue(cor)
      .trim();
  } else if (id === "mais_react_native") {
    cor = "--width-vermelho";
    // Pega o valor atual de --width-verde
    currentWidth = getComputedStyle(document.documentElement)
      .getPropertyValue(cor)
      .trim();
  } else if (id === "mais_flutter") {
    cor = "--width-azul";
    // Pega o valor atual de --width-verde
    currentWidth = getComputedStyle(document.documentElement)
      .getPropertyValue(cor)
      .trim();
  }

  //---------------------------------------------------------------------------------------------
  // Pega o valor de --max-width
  let maxWidth = getComputedStyle(document.documentElement)
    .getPropertyValue("--max-width")
    .trim(); // Remove qualquer espaço extra

  // Converte ambos os valores para números
  currentWidth = parseInt(currentWidth);
  maxWidth = parseInt(maxWidth);

  // Verifica se o valor atual está dentro do limite e adiciona 10, se possível
  if (currentWidth + 10 <= maxWidth) {
    // Se não ultrapassar o máximo, aumenta o valor
    currentWidth += 10;
    document.documentElement.style.setProperty(cor, `${currentWidth}px`);
  } else {
    // Se o valor ultrapassar o máximo, seta o valor como o máximo
    document.documentElement.style.setProperty(cor, `${maxWidth}px`);
  }
}

//==========================================================================================

function subtraiValor(id) {
  let currentWidth = "";
  let cor;

  if (id === "menos_js") {
    cor = "--width-verde";
    currentWidth = getComputedStyle(document.documentElement)
      .getPropertyValue(cor)
      .trim();
  } else if (id === "menos_react") {
    cor = "--width-amarelo";
    currentWidth = getComputedStyle(document.documentElement)
      .getPropertyValue(cor)
      .trim();
  } else if (id === "menos_react_native") {
    cor = "--width-vermelho";
    currentWidth = getComputedStyle(document.documentElement)
      .getPropertyValue(cor)
      .trim();
  } else if (id === "menos_flutter") {
    cor = "--width-azul";
    currentWidth = getComputedStyle(document.documentElement)
      .getPropertyValue(cor)
      .trim();
  }

  //---------------------------------------------------------------------------------------------

  // Pega o valor de --max-width
  let maxWidth = getComputedStyle(document.documentElement)
    .getPropertyValue("--max-width")
    .trim(); // Remove qualquer espaço extra

  // Converte ambos os valores para números
  currentWidth = parseInt(currentWidth);
  maxWidth = parseInt(maxWidth);

  if (currentWidth - 10 > 0) {
    // Se não ultrapassar o máximo, aumenta o valor
    currentWidth -= 10;
    document.documentElement.style.setProperty(cor, `${currentWidth}px`);
  } else {
    // Se o valor ultrapassar o máximo, seta o valor como o máximo
    document.documentElement.style.setProperty(cor, "0px");
  }
}
