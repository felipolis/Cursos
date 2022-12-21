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

const fileInput = document.getElementById('fileInput')

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0]
    ref.child(file.name).put(file).then(snapshot => {
        console.log(snapshot)
    })
})

