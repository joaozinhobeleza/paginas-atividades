let temperaturaEmCelsius;

function converterTemperatura() {
  temperaturaEmCelsius = parseFloat(document.getElementById('temperatura').value);
  if (isNaN(temperaturaEmCelsius)) {
    alert("Por favor, insira um valor válido para a temperatura!");
    return;
  }
  document.getElementById('resultado').textContent = `Temperatura em Celsius: ${temperaturaEmCelsius}°C`;
}

function mostrarResultado(unidade) {
  if (isNaN(temperaturaEmCelsius)) {
    alert("Primeiro, insira a temperatura em Celsius!");
    return;
  }

  let resultado;
  if (unidade === 'fahrenheit') {
    resultado = (temperaturaEmCelsius * 9/5) + 32;
    document.getElementById('resultado').textContent = `${temperaturaEmCelsius}°C é igual a ${resultado.toFixed(2)}°F`;
  } else if (unidade === 'kelvin') {
    resultado = temperaturaEmCelsius + 273.15;
    document.getElementById('resultado').textContent = `${temperaturaEmCelsius}°C é igual a ${resultado.toFixed(2)}K`;
  }
}
