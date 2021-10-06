import dayjs from 'dayjs';

import { firebaseInstance as firebase } from '../Firebase/index.js';
import { getAuth } from 'firebase/auth';
import { doc, collection, getDoc, updateDoc, addDoc, setDoc, arrayUnion } from 'firebase/firestore';

import { userConverter } from './User';

export default class Initiative {
  constructor(type, description, target, startDate, endDate, supporters, createdBy, createdAt) {
    this.type = type;
    this.description = description;
    this.createdBy = createdBy;
    this.target = target;
    this.startDate = startDate;
    this.endDate = endDate;
    this.createdAt = createdAt;
    this.supporters = supporters ? supporters : [];
  }

  static converter = {
    toFirestore: (initiative) => {
      return {
        type: initiative.type,
        description: initiative.description,
        target: initiative.target,
        startDate: initiative.startDate,
        endDate: initiative.endDate,
        supporters: initiative.supporters,
        createdBy: initiative.createdBy,
        createdAt: initiative.createdAt,
        id: initiative.id
      };
    },
    fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options);
      return new Initiative({ ...data });
    }
  };

  static create(type, description, target, startDate, endDate, supporters) {
    const uid = getAuth().currentUser.uid;
    return addDoc(collection(firebase.db, "initiatives"), new Initiative(type, description, target, startDate, endDate, supporters, getAuth().currentUser.uid, dayjs().format()));
  }

  static readOne(id) {
    return getDoc(doc(firebase.db, "initiatives", id))
      .then(snap => snap.data())
  }

  save() {
    return setDoc(doc(firebase.db, "intiatives", this.id), this);
  }

  toString() {
    return Object.values(this).join(', ');
  }
}