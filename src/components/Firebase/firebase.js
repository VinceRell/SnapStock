import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBN8oMvzvI3-n1FliqWHfT-l1VQHhtLM_0",
  authDomain: "snapstock-54ccc.firebaseapp.com",
  databaseURL: "https://snapstock-54ccc.firebaseio.com",
  projectId: "snapstock-54ccc",
  storageBucket: "gs://snapstock-54ccc.appspot.com",
  messagingSenderId: 957442298007,
}

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }

   // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
  this.auth.createUserWithEmailAndPassword(email, password)
  
  doSignInWithEmailAndPassword = (email, password) =>
  this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();
}

export default Firebase;