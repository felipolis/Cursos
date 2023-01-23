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



db.collection(TURMA).where("notas.nota1", ">", 8).onSnapshot((snapshot) => {
    snapshot.docs.forEach((doc) => {
        let aluno = doc.data()
        console.log(aluno.nome)
    })
})

//OBS. o método onSnapshot() é um método que é chamado sempre que há uma alteração nos documentos especificos.