import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAxCGNLcjs8WlU-TN0zcadxQdjv9bKFygI",
  authDomain: "remoto-jobs.firebaseapp.com",
  projectId: "remoto-jobs",
  storageBucket: "remoto-jobs.appspot.com",
  messagingSenderId: "353731277488",
  appId: "1:353731277488:web:c9a359e248fa3d64efc175"
};

const app = firebase.apps.length === 0 
            ? firebase.initializeApp(firebaseConfig) 
            : firebase.app()

const auth = app.auth()
const storage = app.storage()
const firestore = app.firestore()
const GoogleProvider = new firebase.auth.GoogleAuthProvider()

export {
  auth,
  storage,
  firestore,
  GoogleProvider
}
