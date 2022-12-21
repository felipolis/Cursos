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



let docRef = db.collection(TURMA).doc("AlunoNovo")
docRef.onSnapshot((doc) => {
    let aluno = doc.data()
    console.log(aluno)
})

//OBS. o método onSnapshot() é um método que é chamado sempre que há uma alteração no documento especifico.