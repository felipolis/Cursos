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