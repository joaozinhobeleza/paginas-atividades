function calcularNotas() {
    let valor = parseInt(document.getElementById('valor').value);
    if (isNaN(valor) || valor <= 0) {
      alert("Por favor, insira um valor válido!");
      return;
    }
  
    const notas = [100, 50, 10, 5, 2];
    let resultado = "";
  
    notas.forEach(nota => {
      let qtdNotas = Math.floor(valor / nota);
      if (qtdNotas > 0) {
        resultado += `${qtdNotas} nota(s) de R$${nota} <br>`;
        valor -= qtdNotas * nota;
      }
    });
  
    document.getElementById('resultado').innerHTML = resultado;
  }
  