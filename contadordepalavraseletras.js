function contarTexto() {
    const texto = document.getElementById("texto").value.trim();
  
    const palavras = texto.length > 0 ? texto.split(/\s+/).length : 0;
    const letras = texto.replace(/\s+/g, "").length;
  
    document.getElementById("resultado").innerHTML = `
      <p>Palavras: ${palavras}</p>
      <p>Letras (sem espaços): ${letras}</p>
    `;
  }
  