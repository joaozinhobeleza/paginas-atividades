function verificarPrimo() {
    const num = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
  
    if (isNaN(num) || num < 1) {
      resultado.textContent = "Digite um número inteiro positivo.";
      return;
    }
  
    if (num === 1) {
      resultado.textContent = "1 não é primo.";
      return;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        resultado.textContent = `${num} não é primo.`;
        return;
      }
    }
  
    resultado.textContent = `${num} é primo!`;
  }
  