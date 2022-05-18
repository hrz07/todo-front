// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDaLUt9F2PvxZ3g5nE48OjLMglPb8Kqt0",
  authDomain: "todo-aee72.firebaseapp.com",
  projectId: "todo-aee72",
  storageBucket: "todo-aee72.appspot.com",
  messagingSenderId: "840013858227",
  appId: "1:840013858227:web:89ce1c212000ff239477c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;