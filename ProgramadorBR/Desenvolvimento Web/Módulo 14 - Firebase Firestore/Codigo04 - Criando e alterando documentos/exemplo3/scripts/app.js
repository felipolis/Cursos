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

// Modificando dados sem sobrescrever o documento
db.collection(TURMA).doc("AlunoNovo").set(
    {
        sobrenome: "Moraes",
    },
    {
        merge: true
    }
).then(() =>{
    console.log("Documento adicionado com sucesso!")
}).catch((error) => {
    console.log(`Erro ao adicionar documento: ${error}`)
});

//OBS. set() é utilizado tanto para criar documentos quanto para alterar dados de documentos já existentes.