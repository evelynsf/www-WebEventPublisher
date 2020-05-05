import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAXDJFMOJ1ouLz9JZgLLOm5EI8xvqM_czo",
    authDomain: "webeventpublisher.firebaseapp.com",
    databaseURL: "https://webeventpublisher.firebaseio.com",
    projectId: "webeventpublisher",
    storageBucket: "webeventpublisher.appspot.com",
    messagingSenderId: "210675909413",
    appId: "1:210675909413:web:cf51fe69bab58ca7d490cc"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);