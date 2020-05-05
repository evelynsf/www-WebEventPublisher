import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "apikey",
    authDomain: "webeventpublisher.firebaseapp.com",
    databaseURL: "https://webeventpublisher.firebaseio.com",
    projectId: "webeventpublisher",
    storageBucket: "webeventpublisher.appspot.com",
    messagingSenderId: "senderId",
    appId: "appId"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);
