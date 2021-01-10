import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDvHH45ZlAP1LdPzsNMRLpvAcgqSt-JNMo",
    authDomain: "discord-clone-yt-4c16f.firebaseapp.com",
    projectId: "discord-clone-yt-4c16f",
    storageBucket: "discord-clone-yt-4c16f.appspot.com",
    messagingSenderId: "371196057711",
    appId: "1:371196057711:web:63cc49e231a1662077159a",
    measurementId: "G-PN0W0P31K8"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;