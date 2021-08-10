import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSEGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

export const createUserProfileDocument = async (userAuth, theRestOfData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, email, createdAt, ...theRestOfData
            })
        } catch (error) {
            console.log(error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


// const config = {
//     apiKey: "AIzaSyCXsHT58cErtjg50b2Lf2mH0pthlhM-KDc",
//     authDomain: "e-commerce-app-w.firebaseapp.com",
//     projectId: "e-commerce-app-w",
//     storageBucket: "e-commerce-app-w.appspot.com",
//     messagingSenderId: "631272419104",
//     appId: "1:631272419104:web:1c75ae639daf6a0a9fb145"
// };