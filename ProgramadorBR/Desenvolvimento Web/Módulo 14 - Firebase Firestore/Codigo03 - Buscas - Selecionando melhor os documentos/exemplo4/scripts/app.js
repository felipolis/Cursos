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


db.collection("turmaA")
    .where("notas.nota1", ">", 8)
        .get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                let aluno = doc.data()
                console.log(aluno.nome, aluno.sobrenome)
            })
        })