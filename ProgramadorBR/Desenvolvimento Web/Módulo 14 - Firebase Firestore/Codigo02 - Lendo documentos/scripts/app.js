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

// Ler todos os dados de uma coleção
db.collection("turmaA")
    .get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            let aluno = doc.data()
            console.log(aluno.nome)
        })
    })

// Ler um documento específico
let docRef = db.collection("turmaA").doc("oSGwQHeevZHgIW29iLyu")
docRef.get().then((doc) => {
    if (doc.exists) {
        let aluno = doc.data()
        console.log(aluno.nome)
    } else {
        console.log("Documento não existe")
    }
})