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

const database = firebase.database();

database.ref().set({
  name: 'Gret',
  age: 21,
  isSingle: false,
  location: {
    city: 'Vilnius',
    country: 'Lithuania'
  },
}).then(() => {
  console.log('1. Data is saved');
}).catch((error) => {
  console.log('1. This failed', error);
});


// database.ref('isSingle').set(null);

// database.ref().remove().then(() => {
//   console.log('Data was removed');
// }).catch((error) => {
//   console.log('Data was not removed: ', error);
// });