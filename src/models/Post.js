import dayjs from 'dayjs';

import { firebaseInstance as firebase } from '../Firebase/index.js';
import { getAuth } from 'firebase/auth';
import { doc, collection, getDoc, updateDoc, addDoc, setDoc, arrayUnion } from 'firebase/firestore';

import { userConverter } from './User';

export default class Post {
  constructor(text, likes, createdBy, createdAt) {

    if (!createdBy) throw new Error('post creation error: post createdBy nobody!')
    else this.createdBy = createdBy;

    this.text = text ? text : '';
    this.likes = likes ? likes : 0;
    this.createdAt = createdAt ? createdAt : dayjs().format();
  }

  static create() {
    const uid = getAuth().currentUser.uid;
    const pref = collection(firebase.db, "posts");
    addDoc(pref.withConverter(postConverter), new Post('', 0, uid))
      .then((p) => updateDoc(doc(firebase.db, "users", uid).withConverter(userConverter), { posts: arrayUnion(p.id) }))
  }

  toString() {
    return [this.text, this.likes, this.createdBy, this.createdAt].join(', ');
  }
}

// Firestore data converter
const postConverter = {
  toFirestore: (post) => {
    return {
      text: post.text,
      likes: post.likes,
      createdBy: post.createdBy,
      createdAt: post.createdAt
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new Post(data.text, data.likes, data.createdBy, data.createdAt);
  }
};