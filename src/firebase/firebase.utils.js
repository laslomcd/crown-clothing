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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
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