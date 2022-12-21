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
    .where("nome", ">", "Anna")
    .where("nome", "<", "Pamella")
        .get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                let aluno = doc.data()
                console.log(aluno.nome, aluno.sobrenome)
            })
        })