import dayjs from 'dayjs';

import { firebaseInstance as firebase } from '../Firebase/index.js';
import { doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';


export default class User {
  constructor(email, name, type, sex, dateOfBirth, posts, profile) {
    // if (!uid) throw new Error('invalid User object: no uid');
    if (!email) throw new Error('invalid User object: no email given');

    this.createdAt = dayjs().format();
    this.email = email;
    this.name = name ? name : '';
    this.type = type ? type : 'individual';
    this.initiatives = [];
    this.posts = [];
    this.profile = {};
  }

  static create(uid, email, name) {
    console.log('name', name);
    return setDoc(doc(firebase.db, "users", uid).withConverter(userConverter), new User(email, name));
  }

  static readById(uid) {
    return getDoc(doc(firebase.db, "users", uid).withConverter(userConverter)).then(u => u.data());
  }

  static update(uid, obj) {
    // needs to be more complicated than this to handle array and object fields. E.g. array.union
    return updateDoc(doc(firebase.db, "users", uid).withConverter(userConverter), obj);
  }

  static delete() {
    
  }

  addPost() {

  }

  toString() {
    return [this.createdAt, this.email, this.name, this.type, this.initiatives, this.posts.map((p) => p), this.profile].join(', ')
  }
}

// Firestore data converter
export const userConverter = {
  toFirestore: (user) => {
    return {
      createdAt: user.createdAt,
      email: user.email,
      name: user.name,
      type: user.type,
      initiatives: user.initiatives,
      posts: user.posts,
      profile: user.profile
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new User(data.email, data.name, data.type, data.sex, data.dateOfBirth, data.posts, data.profile);
  }
};