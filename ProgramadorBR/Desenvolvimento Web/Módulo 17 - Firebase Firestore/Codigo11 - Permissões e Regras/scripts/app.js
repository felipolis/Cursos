// Initialize Firebase
const firebaseConfig = {
    apiKey: "SUA APIKEY AQUI",
    authDomain: "SEU AUTHDOMAIN AQUI",
    projectId: "SEU PROJECTID AQUI",
    storageBucket: "SEU STORAGEBUCKET AQUI",
    messagingSenderId: "SEU MESSAGINGSENDERID AQUI",
    appId: "SEU APPID AQUI",
    measurementId: "SEU MEASUREMENTID AQUI"
  };

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

// AUTENTICAÇÃO
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
    let userEmail = "teste@teste.com"
    let userPassword = "123456"

    auth.setPersistence(firebase.auth.Auth.Persistence.NONE)
        .then(() => {
            auth.signInWithEmailAndPassword(userEmail, userPassword)
                .then(() => {
                    console.log("Usuário logado com sucesso");
                    escrever();
                })
                .catch(error => {
                    console.log(error);
                })
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

// OUTRAS FUNÇÕES
function ler(){
    db.collection("lista").get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            let item = doc.data()
            console.log(item)
        })
    }).catch((err) => {
        console.log(err)
    })
}

function escrever(){
    db.collection("lista").add({
        title: "Novo item2",
        numero: Math.random()
    }).then(doc => {
        console.log(doc)
    }).catch((err) => {
        console.log(err)
    })
}
//criarUsuario();
login();
