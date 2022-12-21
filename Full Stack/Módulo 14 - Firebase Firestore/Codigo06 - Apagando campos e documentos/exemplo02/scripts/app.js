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
db.collection(TURMA).doc("AlunoNovo").delete().then(() => {
    console.log("Documento apagado com sucesso!")
}).catch((error) => {
    console.log("Erro ao apagar o documento: ", error)
})
