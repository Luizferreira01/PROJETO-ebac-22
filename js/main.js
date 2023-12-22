const form = document.getElementById('contato');
form.addEventListener('submit', function(e){
    e.preventDefault();


    const inputNomeContato = document.getElementById('Nome-Do-Contato');
    const inputNumeroContato = document.getElementById('Numero-Do-Contato');

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `<td>${inputNomeContato.vAlue  'registrando' : 'erro'}</td>`;
    linha += '</tr>';

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linha;

})