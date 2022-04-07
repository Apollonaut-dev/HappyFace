import firebase from 'firebase/firebase';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyCPPGmV5P1jiRLTz5FC8f0k-XPDRcT8aFU",
  authDomain: "test-sp117.firebaseapp.com",
  projectId: "test-sp117",
  storageBucket: "test-sp117.appspot.com",
  messagingSenderId: "183779004760",
  appId: "1:183779004760:web:dcd416cb9b2939f2cc952d"
}

firebase.initializeApp(config);

const storage = firebase.storage();

class Firebase {
  static instance;
  constructor() {

    this.auth = firebase.auth();
    this.db = firebase.database();
    Firebase.instance = this;
  }

  static getInstance() {
    return Firebase.instance;
  }

  signInWithEmailAndPassword = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password)
      .then(user => {
        // TODO check db
        console.log('signin success');
      })
      .catch(e => console.log('error', e));
  }

  signUpWithEmailAndPassword = (email, password) => {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  signOut = () => {
    return this.auth.signOut();
  }
}

export {storage, Firebase as default };