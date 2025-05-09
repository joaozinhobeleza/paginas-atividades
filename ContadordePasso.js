function contar() {
    const inicio = parseInt(document.getElementById('inicio').value);
    const fim = parseInt(document.getElementById('fim').value);
    const passo = parseInt(document.getElementById('passo').value);
    const resultado = document.getElementById('resultado');
  
    if (isNaN(inicio) || isNaN(fim) || isNaN(passo)) {
      resultado.textContent = 'Por favor, preencha todos os campos!';
      resultado.style.color = 'red';
      return;
    }
  
    let contagem = '';
    for (let i = inicio; i <= fim; i += passo) {
      contagem += `${i} `;
    }
    resultado.textContent = `Contagem: ${contagem}`;
    resultado.style.color = 'green';
  }