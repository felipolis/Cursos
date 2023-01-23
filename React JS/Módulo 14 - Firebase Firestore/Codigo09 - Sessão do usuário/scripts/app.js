// Initialize Firebase
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()


let auth = firebase.auth();

function criarUsuario(){
    let newUserEmail = "novoteste@teste.com"
    let newUserPassword = "123456"
    
    auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword)
        .then(user => {
            console.log(user)
        })
        .catch(error => {
            console.log(error)
        })
}

function login(){
    let userEmail = "novoteste@teste.com"
    let userPassword = "123456"

    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(() => {
            auth.signInWithEmailAndPassword(userEmail, userPassword)
                .then(loggedUser => {
                    console.log("Usuário logado com sucesso")
                })
                .catch(error => {
                    console.log(error)
                })
        })
    // LOCAL: armazena dados no navegador
    // SESSION: armazena dados no navegador por sessão
    // NONE: não armazena dados no navegador

}

function logout(){
    auth.signOut()
        .then(() => {
            console.log("Logout realizado com sucesso")
        })
        .catch(error => {
            console.log(error)
        })
}


auth.onAuthStateChanged(user => {
    if(user){
        console.log(user)
    }else{
        console.log("Não há usuário logado")
    }
});

//OBS. o método setPersistence() é utilizado para armazenar dados do usuario no navegador.