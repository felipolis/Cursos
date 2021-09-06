function VerificarEntrada(){
    NomeConvidado = document.getElementById('nome').value;
    ConvidadosFelipe = ['Felipe', 'Pamella', 'Rafael'];
    if(ConvidadosFelipe.includes(NomeConvidado)){
        document.getElementById('PermissaoDeEntrada').innerText = 'Você pode entrar!'
    } else{
        document.getElementById('PermissaoDeEntrada').innerText = 'Você não pode entrar!'
    }
}