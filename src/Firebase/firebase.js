import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onIdTokenChanged } from 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
}

class Firebase {
  static instance;
  constructor() {
    this.app = initializeApp(config);

    this.auth = getAuth();
    this.db = getFirestore();
    Firebase.instance = this;
  }

  static getInstance() {
    return Firebase.instance;
  }

  signInWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  signUpWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(this.auth, email, password)
  }

  signOut = () => {
    return this.auth.signOut();
  }

  authStateChangeListener = (cb) => {
    const unsubscribe = onIdTokenChanged(this.auth, cb);
    return unsubscribe;
  }

  addPost(post) {
    addDoc(collection(this.db, "posts"), post)
      .then((u) => {
        addDoc(collection(this.db, "users"), { posts: [...u.posts, u.id] })
      })
      .catch(console.log)
  }
}

export default Firebase;