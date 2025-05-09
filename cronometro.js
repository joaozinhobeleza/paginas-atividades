let tempo = 0;
let intervalo;
let cronometroRodando = false;

function iniciarCronometro() {
  if (!cronometroRodando) {
    intervalo = setInterval(function() {
      tempo++;
      exibirTempo();
    }, 1000);
    document.getElementById('iniciar').disabled = true;
    document.getElementById('pausar').disabled = false;
    cronometroRodando = true;
  }
}

function pausarCronometro() {
  clearInterval(intervalo);
  document.getElementById('iniciar').disabled = false;
  document.getElementById('pausar').disabled = true;
  cronometroRodando = false;
}

function zerarCronometro() {
  clearInterval(intervalo);
  tempo = 0;
  exibirTempo();
  document.getElementById('iniciar').disabled = false;
  document.getElementById('pausar').disabled = true;
  cronometroRodando = false;
}

function exibirTempo() {
  let minutos = Math.floor(tempo / 60);
  let segundos = tempo % 60;
  if (segundos < 10) {
    segundos = '0' + segundos;
  }
  document.getElementById('tempo').textContent = `${minutos}:${segundos}`;
}
 