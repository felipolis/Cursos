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


// Apagando um campo do documento
db.collection(TURMA).doc("AlunoNovo").update({
    cidades: firebase.firestore.FieldValue.delete()
}).then(() => {
    console.log("Documento atualizado com sucesso!")
}).catch((error) => {
    console.log("Erro ao atualizar o documento: ", error)
})
