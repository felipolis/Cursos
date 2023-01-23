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