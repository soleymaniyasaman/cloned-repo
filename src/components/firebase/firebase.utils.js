import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyCppsRo3S3RfMClfoOJ2RSyf_8K7JSr-FA",
    authDomain: "cloned-pro.firebaseapp.com",
    databaseURL: "https://cloned-pro.firebaseio.com",
    projectId: "cloned-pro",
    storageBucket: "cloned-pro.appspot.com",
    messagingSenderId: "723068921266",
    appId: "1:723068921266:web:15dc96ee474e04136270ab",
    measurementId: "G-XBKG4SRQ11"
  };

  firebase.initializeApp (config)
  export const auth =firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;