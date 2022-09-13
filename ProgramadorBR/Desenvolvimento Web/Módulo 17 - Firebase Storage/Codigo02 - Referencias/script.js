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


ref.listAll().then((res) => {
    res.items.forEach((itemRef) => {
        // All the items under listRef.
        itemRef.getDownloadURL().then((url) => {
            // Insert url into an <img> tag to "download"
            console.log(url)
        })
    })
});