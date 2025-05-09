function sortearNumero() {
    const minimo = parseInt(document.getElementById('minimo').value);
    const maximo = parseInt(document.getElementById('maximo').value);
  
    if (isNaN(minimo) || isNaN(maximo)) {
      document.getElementById('resultado').textContent = 'Por favor, insira valores válidos para o mínimo e máximo.';
      return;
    }
  
    const numeroSorteado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  
    document.getElementById('resultado').textContent = `Número sorteado: ${numeroSorteado}`;
  }
  