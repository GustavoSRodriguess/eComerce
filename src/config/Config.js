import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDi9Loa9b6fLKv_XJT-JaTmDH77npWJLnE",
    authDomain: "ecomerce-62638.firebaseapp.com",
    projectId: "ecomerce-62638",
    storageBucket: "ecomerce-62638.appspot.com",
    messagingSenderId: "473280378574",
    appId: "1:473280378574:web:5baccc4557b74df4cf429f",
    measurementId: "G-23KNK3R3NJ"
  };

  firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth()
  const db = firebase.firestore()
  const storage = firebase.storage()

  export {auth, db, storage}
