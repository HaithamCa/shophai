import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCXsHT58cErtjg50b2Lf2mH0pthlhM-KDc",
    authDomain: "e-commerce-app-w.firebaseapp.com",
    projectId: "e-commerce-app-w",
    storageBucket: "e-commerce-app-w.appspot.com",
    messagingSenderId: "631272419104",
    appId: "1:631272419104:web:1c75ae639daf6a0a9fb145"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;