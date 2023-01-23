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

    auth.signInWithEmailAndPassword(userEmail, userPassword)
        .then(loggedUser => {
            console.log("Usuário logado com sucesso")
        })
        .catch(error => {
            console.log(error)
        })
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

setTimeout(login, 5000);