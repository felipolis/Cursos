let usuarios = ["Diego", "Gabriel", "Lucas"];

function inserirUsuario(usuario, callback) {
    setTimeout(function() {
        usuarios.push(usuario);
        callback();
    }, 1000);
}

function listarUsuarios() {
    console.log(usuarios);
}

inserirUsuario("Felipe", listarUsuarios);