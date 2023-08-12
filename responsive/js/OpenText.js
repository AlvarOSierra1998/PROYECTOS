function toggleText() {
    var text = document.querySelector('.textoescondido');
    var button = document.querySelector('.leermas');
    if (text.style.overflow === "hidden") {
      text.style.overflow = "visible";
      text.style.textOverflow = "unset";
      text.style.whiteSpace = "normal";
      button.textContent = "Esconder texto";
    } else {

      text.style.overflow = "hidden";
      text.style.textOverflow = "ellipsis";
      text.style.whiteSpace = "nowrap";
      button.textContent = "Seguir leyendo";
    }
  }