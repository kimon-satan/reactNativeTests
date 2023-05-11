import {
  collection,
  addDoc,
  query,
  getDocs,
  onSnapshot
} from "firebase/firestore";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

import { db, app, auth } from "./Config";

export default class FirebaseIface {
  app;
  db;
  auth;

  constructor() {
    this.app = app;
    this.db = db;
    this.auth = auth;
  }

  signup(email, password) {
    console.log({ email, password });
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  signin(email, password) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  subscribeUser(callback) {
    onAuthStateChanged(this.auth, (user) => {
      callback(user);
    });
  }

  signout() {
    signOut(this.auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        alert(error.message);
      });
  }

  //////////////////// STORIES /////////////////////

  async addStory() {
    try {
      const docRef = await addDoc(collection(this.db, "stories"), {
        subject: "Journal",
        body: "Some text about me ...",
        date: new Date().toISOString()
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  subscribeStories(callback) {
    const q = query(collection(this.db, "stories"));
    onSnapshot(q, (querySnapshot) => {
      const stories = [];
      querySnapshot.forEach((doc) => {
        stories.push({ id: doc.id, ...doc.data() });
      });
      callback(stories);
    });
  }

  async getStories() {
    const q = query(collection(this.db, "stories"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs;
  }
}
