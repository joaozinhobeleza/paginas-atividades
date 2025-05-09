function calcular() {
    const n1 = +document.getElementById('num1').value;
    const n2 = +document.getElementById('num2').value;
    const op = document.getElementById('operacao').value;
    let res = '';
  
    if (!n1 || !n2) {
      res = 'Preencha os dois números.';
    } else {
      res = {
        soma: n1 + n2,
        subtracao: n1 - n2,
        multiplicacao: n1 * n2,
        divisao: n2 !== 0 ? n1 / n2 : 'Erro: divisão por zero'
      }[op];
    }
  
    document.getElementById('resultado').textContent = `Resultado: ${res}`;
  }