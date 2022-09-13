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


// Apagando um campo do documento
db.collection(TURMA).doc("AlunoNovo").update({
    cidades: firebase.firestore.FieldValue.delete()
}).then(() => {
    console.log("Documento atualizado com sucesso!")
}).catch((error) => {
    console.log("Erro ao atualizar o documento: ", error)
})
