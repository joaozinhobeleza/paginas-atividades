function calcularMedia() {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    let nota4 = parseFloat(document.getElementById("nota4").value);
    const resultado = document.getElementById("resultado");

    // Verifica se as notas são válidas e se não são maiores que 10
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
      resultado.textContent = "Por favor, preencha pelo menos 3 notas.";
      resultado.style.color = "red";
      return;
    }

    // Limita as notas para não ultrapassarem 10
    nota1 = (nota1 > 10) ? 10 : nota1;
    nota2 = (nota2 > 10) ? 10 : nota2;
    nota3 = (nota3 > 10) ? 10 : nota3;
    nota4 = (nota4 > 10) ? 10 : nota4;

    let media = (nota1 + nota2 + nota3) / 3;

    if (!isNaN(nota4)) {
      media = (nota1 + nota2 + nota3 + nota4) / 4;
    }

    let status = "";

    if (media >= 7) {
      status = "Aprovado!";
    } else if (media >= 5) {
      status = "Recuperação!";
    } else {
      status = "Reprovado!";
    }

    resultado.textContent = `Média: ${media.toFixed(1)} - Status: ${status}`;
    resultado.style.color = "green";
}
