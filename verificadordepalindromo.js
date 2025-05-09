function verificarPalindromo() {
    const texto = document.getElementById('texto').value.trim().toLowerCase();
    const resultado = document.getElementById('resultado');
  
    // Remove espaços e caracteres especiais, considerando apenas letras
    const textoLimpo = texto.replace(/[^a-z]/g, '');
  
    // Verifica se o texto é igual ao seu inverso
    const textoInvertido = textoLimpo.split('').reverse().join('');
  
    if (textoLimpo === textoInvertido) {
      resultado.textContent = `"${texto}" é um palíndromo!`;
    } else {
      resultado.textContent = `"${texto}" não é um palíndromo.`;
    }
  }
  