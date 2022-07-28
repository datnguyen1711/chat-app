import { addDoc, serverTimestamp, collection } from "firebase/firestore";
import { db } from "./config";

export const addDocument = (colection, data) => {
  const query = collection(db, colection);
  addDoc(query, { ...data, createAt: serverTimestamp() });
};
