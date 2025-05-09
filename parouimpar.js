function verificarParImpar() {
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');
    if (numero % 2 === 0) {
      resultado.textContent = `${numero} é um número Par.`;
    } else {
      resultado.textContent = `${numero} é um número Ímpar.`;
    }
  }
  