import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA9Zl2M0mqPmFOjh-mAbW4nmoSsXeg467E",
    authDomain: "crwn-db-eec98.firebaseapp.com",
    databaseURL: "https://crwn-db-eec98.firebaseio.com",
    projectId: "crwn-db-eec98",
    storageBucket: "crwn-db-eec98.appspot.com",
    messagingSenderId: "1073277534865",
    appId: "1:1073277534865:web:3e89e33b9335a628bab530"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;

