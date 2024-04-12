// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbTa9BhO58ahcwiDFnK5EwlviueLRyr-U",
  authDomain: "brain-bright.firebaseapp.com",
  projectId: "brain-bright",
  storageBucket: "brain-bright.appspot.com",
  messagingSenderId: "517459296528",
  appId: "1:517459296528:web:1a5e0ff36eacb311b9a595"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp
