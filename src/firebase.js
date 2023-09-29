import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyACG6QkHKmgsHM938mYMz8EKtw6j-snyqE",
    authDomain: "netflix-clone-53052.firebaseapp.com",
    projectId: "netflix-clone-53052",
    storageBucket: "netflix-clone-53052.appspot.com",
    messagingSenderId: "503009067988",
    appId: "1:503009067988:web:4cdb9c697b53a61ed8cc41",
    measurementId: "G-WZG3G65ZL9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };