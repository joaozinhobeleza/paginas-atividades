function gerarSenha() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+';
    const tamanho = document.getElementById('tamanho').value;
    let senha = '';
  
    for (let i = 0; i < tamanho; i++) {
      const randomIndex = Math.floor(Math.random() * caracteres.length);
      senha += caracteres[randomIndex];
    }
  
    document.getElementById('senha').textContent = `Senha gerada: ${senha}`;
  }
  