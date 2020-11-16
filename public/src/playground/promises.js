const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'Ted',
    //   age: 26
    // });
    reject('Something went wrong!!!')
  }, 1500)
});

promise
  .then((data) => {
    console.log(data);
    return 'some data';
  })
  .then((data) => {
    console.log('second ', data);
  })
  .catch((error) => {
    console.log('error: ', error);
});