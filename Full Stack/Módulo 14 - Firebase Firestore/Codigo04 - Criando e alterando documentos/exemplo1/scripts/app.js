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