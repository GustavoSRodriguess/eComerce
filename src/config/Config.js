import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//Youer firebase config 

  firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth()
  const db = firebase.firestore()
  const storage = firebase.storage()

  export {auth, db, storage}
