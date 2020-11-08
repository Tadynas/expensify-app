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


// // Child removed
// database.ref('expenses')
//   .on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // Child changed
// database.ref('expenses')
//   .on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // Child added
// database.ref('expenses')
//   .on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// Add expenses to array
// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((item) => {
//       expenses.push({
//         id: item.key,
//         ...item.val()
//       });
//     });

//     console.log(expenses);
//   });


// database.ref('expenses').push({
//   description: 'Food',
//   note: '',
//   amount: 195600,
//   createdAt: 100000
// });

// database.ref('notes/-MLcXU1NEEJnzvyAWb7U').remove();

// const firebaseNotes = {
//   notes: {
//     12: {
//       title: 'First',
//       body: 'If you leave'
//     },
//     13: {
//       title: 'Second',
//       body: 'I report'      
//     }
//   }
// };

// const notes = [{
//   id: '12',
//   title: 'First',
//   body: 'If you leave'
// }, {
//   id: '13',
//   title: 'Second',
//   body: 'I report'
// }]

// database.ref('notes').set(notes);

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((error) => {
//     console.log('Error fetching data', error);
// });

// database.ref().on('value', (snapshot) => {
//   const { name, job: { title, company }} = snapshot.val();
//   console.log(`${name} is a ${title} at ${company}.`);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (error) => {
//   console.log('Error with data fetching: ', error)
// });

// setTimeout(() => {
//   database.ref('age').set(420);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(999);
// }, 10500);

// database.ref().set({
//   name: 'Gret',
//   age: 21,
//   stressLevel: 99,
//   job: {
//     title: 'Baker',
//     company: 'Gwet Baking Company'
//   },
//   location: {
//     city: 'Vilnius',
//     country: 'Lithuania'
//   },
// }).then(() => {
//   console.log('1. Data is saved');
// }).catch((error) => {
//   console.log('1. This failed', error);
// });

// database.ref().update({
//   stressLevel: 101,
//   'job/company': 'Greta Reta Baking Company',
//   'location/country': 'Amsterdam'
// }).then(() => {
//   console.log('Data is updated');
// }).catch((error) => {
//   console.log('Update failed', error);
// });

// database.ref('isSingle').set(null);

// database.ref().remove().then(() => {
//   console.log('Data was removed');
// }).catch((error) => {
//   console.log('Data was not removed: ', error);
// });