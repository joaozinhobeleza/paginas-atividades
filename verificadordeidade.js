function verificarIdade() {
    const anoNascimento = Number(document.getElementById('ano').value);
    const resultado = document.getElementById('resultado');
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const idade = anoAtual - anoNascimento;
  
    if (isNaN(anoNascimento) || anoNascimento < 1900 || anoNascimento > anoAtual) {
      resultado.textContent = 'Por favor, insira um ano válido.';
      return;
    }
  
    if (idade < 18) {
      resultado.textContent = `Você tem ${idade} anos. É menor de idade.`;
    } else if (idade >= 18 && idade < 60) {
      resultado.textContent = `Você tem ${idade} anos. É adulto.`;
    } else {
      resultado.textContent = `Você tem ${idade} anos. É idoso.`;
    }
  }