import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCPl36zVvOVNX6TBKOvrP53UowH8iWy-_M",
    authDomain: "crown-clothing-80400.firebaseapp.com",
    databaseURL: "https://crown-clothing-80400.firebaseio.com",
    projectId: "crown-clothing-80400",
    storageBucket: "crown-clothing-80400.appspot.com",
    messagingSenderId: "709280830189",
    appId: "1:709280830189:web:e7f648162241a81a5172e4"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;