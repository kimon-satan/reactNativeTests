import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  onSnapshot
} from "firebase/firestore";

import { db } from "./Config";

export default class FirebaseIface {
  async addUser() {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async getUsers() {
    const q = query(collection(this.db, "users"), where("first", "==", "Ada"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs;
  }

  subscribeUsers(callback) {
    const q = query(collection(db, "users"));
    onSnapshot(q, (querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        users.push({ id: doc.id, ...doc.data() });
      });
      callback(users);
    });
  }
}
