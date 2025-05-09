function showExercise(exerciseNumber) {
    // Esconde todos os exercícios
    const exercises = document.querySelectorAll('.exercise');
    exercises.forEach(ex => ex.style.display = 'none');
    
    // Exibe o exercício selecionado
    document.getElementById(`exercise-${exerciseNumber}`).style.display = 'block';
  }
  
  function backToMain() {
    // Volta para a página principal
    const exercises = document.querySelectorAll('.exercise');
    exercises.forEach(ex => ex.style.display = 'none');
  }
  
  // Funções para cada exercício
  
  function verificarParImpar() {
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');
    if (numero % 2 === 0) {
      resultado.textContent = `${numero} é um número Par.`;
    } else {
      resultado.textContent = `${numero} é um número Ímpar.`;
    }
  }
  
  // Exercício 6 - Gerador de Tabuada
  function gerarTabuada() {
    const numero = document.getElementById('numeroTabuada').value;
    let tabuada = '';
    for (let i = 1; i <= 10; i++) {
      tabuada += `${numero} x ${i} = ${numero * i}<br>`;
    }
    document.getElementById('resultadoTabuada').innerHTML = tabuada;
  }
  
  // Exercício 7 - Lista de Compras
  function adicionarItem() {
    const item = document.getElementById('item').value;
    const lista = document.getElementById('listaCompras');
    const li = document.createElement('li');
    li.textContent = item;
    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'Remover';
    btnRemover.onclick = function() {
      li.remove();
    };
    li.appendChild(btnRemover);
    lista.appendChild(li);
    document.getElementById('item').value = '';
  }
  
  // Exercício 8 - Verificador de Palíndromos
  function verificarPalindromo() {
    const texto = document.getElementById('textoPalindromo').value.replace(/\s/g, '').toLowerCase();
    const reverso = texto.split('').reverse().join('');
    if (texto === reverso) {
      document.getElementById('resultadoPalindromo').textContent = 'É um palíndromo!';
    } else {
      document.getElementById('resultadoPalindromo').textContent = 'Não é um palíndromo.';
    }
  }
  
  // Exercício 9 - Simulador de Semáforo
  function mudarSemaforo(cor) {
    const semaforo = document.getElementById('semaforo');
    semaforo.style.backgroundColor = cor;
  }
  
  // Exercício 10 - Conversor de Temperatura
  function converterTemperatura() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    const tipo = document.getElementById('tipoTemperatura').value;
    let resultado;
    if (tipo === 'fahrenheit') {
      resultado = (celsius * 9/5) + 32;
    } else if (tipo === 'kelvin') {
      resultado = celsius + 273.15;
    }
    document.getElementById('resultadoTemperatura').textContent = `Resultado: ${resultado}`;
  }
  
  // Exercício 11 - Simulador de Caixa Eletrônico
  function calcularNotas() {
    const valor = parseInt(document.getElementById('valorCaixa').value);
    const notas = [100, 50, 10, 1];
    let resultado = '';
    for (let nota of notas) {
      const qtdNotas = Math.floor(valor / nota);
      if (qtdNotas > 0) {
        resultado += `${qtdNotas} nota(s) de R$${nota}<br>`;
        valor -= qtdNotas * nota;
      }
    }
    document.getElementById('resultadoCaixa').innerHTML = resultado;
  }
  
  // Exercício 12 - Cronômetro
  let tempo = 0;
  let cronometro;
  
  function iniciarCronometro() {
    cronometro = setInterval(() => {
      tempo++;
      document.getElementById('tempo').textContent = tempo;
    }, 1000);
  }
  
  function pausarCronometro() {
    clearInterval(cronometro);
  }
  
  function zerarCronometro() {
    tempo = 0;
    document.getElementById('tempo').textContent = tempo;
  }
  
  // Exercício 13 - Gerador de Senhas Aleatórias
  function gerarSenha() {
    const tamanho = parseInt(document.getElementById('tamanhoSenha').value);
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let senha = '';
    for (let i = 0; i < tamanho; i++) {
      senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    document.getElementById('senhaGerada').textContent = senha;
  }
  
  // Exercício 14 - Simulador de Sorteio
  function sortearNumero() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    const sorteio = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('resultadoSorteio').textContent = `Número sorteado: ${sorteio}`;
  }
  
  // Exercício 15 - Enquete com Votos
  let votos = { op1: 0, op2: 0, op3: 0 };
  
  function votar(opcao) {
    votos[opcao]++;
    exibirResultados();
  }
  
  function exibirResultados() {
    const totalVotos = votos.op1 + votos.op2 + votos.op3;
    document.getElementById('resultadoEnquete').innerHTML = `
      Opção 1: ${(votos.op1 / totalVotos * 100).toFixed(2)}%<br>
      Opção 2: ${(votos.op2 / totalVotos * 100).toFixed(2)}%<br>
      Opção 3: ${(votos.op3 / totalVotos * 100).toFixed(2)}%<br>
      Total de votos: ${totalVotos}
    `;
  }
  
  // Exercício 16 - Contador de Palavras e Letras
  function contarPalavras() {
    const texto = document.getElementById('textoContagem').value;
    const palavras = texto.trim().split(/\s+/).length;
    const letras = texto.replace(/\s/g, '').length;
    document.getElementById('resultadoContagem').textContent = `Palavras: ${palavras}, Letras: ${letras}`;
  }
  
  // Exercício 17 - Verificador de Números Primos
  function verificarPrimo() {
    const numero = parseInt(document.getElementById('numeroPrimo').value);
    let resultado = 'Número primo!';
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        resultado = 'Não é primo';
        break;
      }
    }
    document.getElementById('resultadoPrimo').textContent = resultado;
  }
  
  // Exercício 18 - Cadastro com Validação
  function validarCadastro() {
    const nome = document.getElementById('nomeCadastro').value;
    const email = document.getElementById('emailCadastro').value;
    const senha = document.getElementById('senhaCadastro').value;
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    if (!nome || !email || !senha) {
      document.getElementById('resultadoCadastro').textContent = 'Todos os campos devem ser preenchidos!';
      return;
    }
  
    if (!regexEmail.test(email)) {
      document.getElementById('resultadoCadastro').textContent = 'Email inválido!';
      return;
    }
    document.getElementById('resultadoCadastro').textContent = 'Cadastro realizado com sucesso!';
  }
  
  // Exercício 19 - Jogo de Adivinhação
  function jogarAdivinhacao() {
    const numeroEscolhido = Math.floor(Math.random() * 100) + 1;
    let tentativa = parseInt(document.getElementById('tentativa').value);
    if (tentativa === numeroEscolhido) {
      alert('Você acertou!');
    } else if (tentativa < numeroEscolhido) {
      alert('Tente um número maior.');
    } else {
      alert('Tente um número menor.');
    }
  }
  
  // Exercício 20 - Simulador de Notas Escolares
  function calcularMediaNotas() {
    const notas = [
      parseFloat(document.getElementById('nota1').value),
      parseFloat(document.getElementById('nota2').value),
      parseFloat(document.getElementById('nota3').value)
    ];
    const media = notas.reduce((acc, val) => acc + val) / notas.length;
    let resultado = 'Reprovado';
    if (media >= 7) {
      resultado = 'Aprovado';
    } else if (media >= 5) {
      resultado = 'Recuperação';
    }
    document.getElementById('resultadoNotas').textContent = `Média: ${media}, Status: ${resultado}`;
  }
  