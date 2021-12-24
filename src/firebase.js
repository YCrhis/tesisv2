import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCku0KBkUJABdy8nWapiZT1OZrGD5bBzrM",
    authDomain: "tesis-414ed.firebaseapp.com",
    projectId: "tesis-414ed",
    storageBucket: "tesis-414ed.appspot.com",
    messagingSenderId: "60215674957",
    appId: "1:60215674957:web:aa4064552604ca35173404"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };

export default db;
