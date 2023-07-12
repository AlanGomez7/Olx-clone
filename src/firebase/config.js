import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firebase'
import 'firebase/storage';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO11eT1jXfGVvRY2J6L2L0s4dVqAiB4Sc",
  authDomain: "olx-clone-e22f6.firebaseapp.com",
  projectId: "olx-clone-e22f6",
  storageBucket: "olx-clone-e22f6.appspot.com",
  messagingSenderId: "394081024799",
  appId: "1:394081024799:web:3b53729fbd6a6919f3ce2a",
  measurementId: "G-JKV1K5GCWB"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
