let usuarios = ["Diego", "Gabriel", "Lucas"];

function inserirUsuario(usuario) {

    let promise = new Promise(function(resolve, reject){

        setTimeout(function(){
            usuarios.push(usuario);

            let error = false;
            if (error) {
                reject({msg: 'Erro ao inserir usuário'});
            } else {
                resolve();
            }
        }, 1000);
    })

    return promise;
}

function listarUsuarios() {
    console.log(usuarios);
}

async function executar(){

    await inserirUsuario("Felipe");
    listarUsuarios();

}


executar();