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

// Adicionando novos campos com o update
db.collection(TURMA).doc("AlunoNovo").update(
    {
        faltas: 5
    },
).then(() =>{
    console.log("Documento adicionado com sucesso!")
}).catch((error) => {
    console.log(`Erro ao adicionar documento: ${error}`)
});
