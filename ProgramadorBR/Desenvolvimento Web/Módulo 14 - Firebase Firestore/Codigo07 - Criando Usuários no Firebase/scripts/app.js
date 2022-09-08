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

// Criando usuário
let newUserEmail = "novoteste@teste.com"
let newUserPassword = "123456"

let auth = firebase.auth();
auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword)
    .then(user => {
        console.log(user)
    })
    .catch(error => {
        console.log(error)
    })