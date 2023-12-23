const form = document.getElementById('contato');
const imgconfirmar = '<img src="/imagem/confirmar.png" alt="emoji registrando" />';
const imgerro = '<img src="/imagem/erro.png" alt="emoji de erro" />';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomeContato = document.getElementById('Nome-Do-Contato');
    const inputNumeroContato = document.getElementById('Numero-Do-Contato');

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `<td>${imgconfirmar}</td>`;
    linha += '</tr>';

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.insertAdjacentHTML('beforeend', linha);

    inputNomeContato.value = '';
    inputNumeroContato.value = '';

    alert(`Contato adicionado com sucesso: ${inputNomeContato.value} - Agenda adicionada com sucesso: ${inputNumeroContato.value}`);
});