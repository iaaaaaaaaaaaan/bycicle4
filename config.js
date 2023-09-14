import firebase from "firebase";
require("@firebase/firestore");


  //Cole sua Configuração do Firebase aqui
  const firebaseConfig = {
    apiKey: "AIzaSyB6wg20PigM4mWGOrMZHTtMhJKCbRK3g9E",
    authDomain: "bike-9cdc6.firebaseapp.com",
    projectId: "bike-9cdc6",
    storageBucket: "bike-9cdc6.appspot.com",
    messagingSenderId: "648374441391",
    appId: "1:648374441391:web:494d1b7ff52a46ca630b5a"
  };
  


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
