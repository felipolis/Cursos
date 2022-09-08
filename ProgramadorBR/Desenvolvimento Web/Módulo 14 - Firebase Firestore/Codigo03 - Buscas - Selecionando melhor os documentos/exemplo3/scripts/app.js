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