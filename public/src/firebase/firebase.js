import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBWBoKC64295kBfzvshW5sRc5H2FKRAU0M",
  authDomain: "expensify-app-3bc4a.firebaseapp.com",
  databaseURL: "https://expensify-app-3bc4a.firebaseio.com",
  projectId: "expensify-app-3bc4a",
  storageBucket: "expensify-app-3bc4a.appspot.com",
  messagingSenderId: "360933236368",
  appId: "1:360933236368:web:bbbfd02c7248d3235a8215"
};

firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
  name: 'Gret'
});