function gerarTabuada() {
    const numero = Number(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');
  
    resultado.innerHTML = '';
  
    if (isNaN(numero) || numero <= 0) {
      resultado.innerHTML = 'Por favor, insira um número válido.';
      return;
    }
  
    let tabuada = '<ul>';
    for (let i = 1; i <= 10; i++) {
      tabuada += `<li>${numero} x ${i} = ${numero * i}</li>`;
    }
    tabuada += '</ul>';
  
    resultado.innerHTML = tabuada;
  }
  