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


db.collection("lista").get().then((snapshot) => {
    snapshot.docs.forEach((doc) => {
        let item = doc.data()
        console.log(item)
    })
}).catch((err) => {
    console.log(err)
})