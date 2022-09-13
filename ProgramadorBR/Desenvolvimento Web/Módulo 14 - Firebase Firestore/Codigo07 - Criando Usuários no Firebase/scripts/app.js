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