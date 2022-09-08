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


db.collection(TURMA).onSnapshot((snapshot) => {
    snapshot.docs.forEach((doc) => {
        let aluno = doc.data()
        console.log(aluno)
    })
})

//OBS. o método onSnapshot() é um método que é chamado sempre que há uma alteração na coleção inteira.