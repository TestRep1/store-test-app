import firebase from 'firebase/app';

import 'firebase/auth'
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCIXcyx_CD8wp4SFZbrwkfhGKtv5o1zLZs",
    authDomain: "store-app-test-d121b.firebaseapp.com",
    projectId: "store-app-test-d121b",
    storageBucket: "store-app-test-d121b.appspot.com",
    messagingSenderId: "680357048188",
    appId: "1:680357048188:web:bc3e4acd0f5650178fbef9",
    measurementId: "G-HFTCJ5R4YB"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

