const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function verificarPalpite() {
  const palpite = Number(document.getElementById("palpite").value);
  const mensagem = document.getElementById("mensagem");
  tentativas++;

  if (palpite < 1 || palpite > 100 || isNaN(palpite)) {
    mensagem.textContent = "Digite um número válido entre 1 e 100.";
    return;
  }

  if (palpite === numeroSecreto) {
    mensagem.textContent = `Parabéns! Você acertou em ${tentativas} tentativa(s)!`;
    mensagem.style.color = "green";
  } else if (palpite < numeroSecreto) {
    mensagem.textContent = "Tente um número maior.";
    mensagem.style.color = "orange";
  } else {
    mensagem.textContent = "Tente um número menor.";
    mensagem.style.color = "orange";
  }
}