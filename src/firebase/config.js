// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCUnIvjdU0ROILwvyr4a0enQ288cPLcZEI",
  authDomain: "dat-mess.firebaseapp.com",
  projectId: "dat-mess",
  storageBucket: "dat-mess.appspot.com",
  messagingSenderId: "922991282101",
  appId: "1:922991282101:web:9cedffdc3127bd4848fbfc",
  measurementId: "G-8KRKWR4PQ6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth, analytics };
