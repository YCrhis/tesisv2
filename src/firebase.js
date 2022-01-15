import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDR9vdRFMLO0YQ46OViMKM-Anj29ya6WtU",
    authDomain: "termoconfort-e276f.firebaseapp.com",
    projectId: "termoconfort-e276f",
    storageBucket: "termoconfort-e276f.appspot.com",
    messagingSenderId: "636701416298",
    appId: "1:636701416298:web:02dd783782e3c277e1e313",
    measurementId: "G-4T2S4CFTX4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
