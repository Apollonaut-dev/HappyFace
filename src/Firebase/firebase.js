import firebase from 'firebase/firebase';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
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