// method 1
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log('Async task is complete');
    resolve();
  }, 1000);
});
promiseOne.then(function () {
  // console.log("Promise consumed");
});

// method 2
new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log('Async task is complete again');
    resolve();
  }, 1000);
}).then(function () {
  // console.log("Promise consumed again");
});

// +++++++   Notes    +++++++
// resolve and then are connected;

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ userName: "omkar", email: "omkar@gmail.com" });
  }, 1000);
});
promiseThree.then(function (user) {
//   console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ userName: "omkar", password: 123 });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));


  const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
      let error = true;
      if (!error) {
        resolve({ userName: "javascript", password: 123 });
      } else {
        reject("ERROR: js went wrong");
      }
    }, 1000);
  });

  async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);        
    } catch (error) {
        console.log(error);        
    }
  }
  consumePromiseFive()