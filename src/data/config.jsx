import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyC_mSUHHk1V5i3vm47YeFjLZOZ-hRS0oI4",
  authDomain: "exposer-99a76.firebaseapp.com",
  databaseURL: "https://exposer-99a76.firebaseio.com",
  projectId: "exposer-99a76",
  storageBucket: "exposer-99a76.appspot.com",
  messagingSenderId: "772213210932"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth