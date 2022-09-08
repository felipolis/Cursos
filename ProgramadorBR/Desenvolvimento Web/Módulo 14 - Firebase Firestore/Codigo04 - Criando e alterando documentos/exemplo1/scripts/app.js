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

const TURMA = "turmaA"

// Adicionando dados
db.collection(TURMA).add({
    nome: "Marcos",
    sobrenome: "Santos",
    notas: {
        nota1: 5.2,
        nota2: 6.5
    }
}).then((doc) =>{
    console.log(`Documento adicionado com o id: ${doc.id}`)
}).catch((error) => {
    console.log(`Erro ao adicionar documento: ${error}`)
});