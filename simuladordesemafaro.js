function mudarLuz(cor) {
    const cores = ['vermelho', 'amarelo', 'verde'];
    
    // Desativa todas as luzes
    cores.forEach(cor => {
      document.getElementById(cor).classList.remove('ligado');
    });
    
    // Ativa a luz selecionada
    document.getElementById(cor).classList.add('ligado');
  }
  