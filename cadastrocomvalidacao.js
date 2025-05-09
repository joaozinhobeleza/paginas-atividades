function validarFormulario(event) {
    event.preventDefault();
    
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const mensagem = document.getElementById("mensagem");
  
    if (!nome || !email || !senha) {
      mensagem.textContent = "Por favor, preencha todos os campos.";
      return;
    }
  
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
      mensagem.textContent = "E-mail inválido.";
      return;
    }
  
    mensagem.style.color = "green";
    mensagem.textContent = "Cadastro realizado com sucesso!";
  }
  