// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()

// Referencia para o arquivo
const ref = storage.ref('Images/')


// ... continuação do exemplo02 do Codigo04
const newMetaData = {
    contentType: 'image/png',
}

ref.child('novaFoto.png').getMetadata().then((metadata) => {
    console.log(metadata)
}).catch((error) => {
    console.log(error)
})

ref.child('novaFoto.png').updateMetadata(newMetaData).then((metadata) => {
    console.log(metadata)
}).catch((error) => {
    console.log(error)
})