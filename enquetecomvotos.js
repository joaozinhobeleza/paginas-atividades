const votos = {
    verao: 0,
    inverno: 0,
    primavera: 0
  };
  
  function votar(opcao) {
    votos[opcao]++;
    mostrarResultados();
  }
  
  function mostrarResultados() {
    const total = votos.verao + votos.inverno + votos.primavera;
    const veraoPct = total ? ((votos.verao / total) * 100).toFixed(1) : 0;
    const invernoPct = total ? ((votos.inverno / total) * 100).toFixed(1) : 0;
    const primaveraPct = total ? ((votos.primavera / total) * 100).toFixed(1) : 0;
  
    document.getElementById('resultado').innerHTML = `
      <p>Total de votos: ${total}</p>
      <p>Verão: ${votos.verao} voto(s) - ${veraoPct}%</p>
      <p>Inverno: ${votos.inverno} voto(s) - ${invernoPct}%</p>
      <p>Primavera: ${votos.primavera} voto(s) - ${primaveraPct}%</p>
    `;
  }
  