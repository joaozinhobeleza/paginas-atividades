document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();

    const produtoInput = document.getElementById('produto');
    const quantidadeInput = document.getElementById('quantidade');
    const lista = document.getElementById('lista-itens');

    const produto = produtoInput.value.trim();
    const quantidade = quantidadeInput.value;

    if (produto === '' || quantidade <= 0) {
        alert('Por favor, preencha os campos corretamente.');
        return;
    }

    const item = document.createElement('li');
    item.textContent = `${quantidade} x ${produto}`;
    item.addEventListener('click', () => {
        item.classList.toggle('comprado');
    });

    lista.appendChild(item);

    produtoInput.value = '';
    quantidadeInput.value = '';
});

document.getElementById('limpar-lista').addEventListener('click', () => {
    document.getElementById('lista-itens').innerHTML = '';
});