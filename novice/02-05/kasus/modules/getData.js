const axios = require('axios');
// async/ await
async function firstAsync() {
    let njupuk = await axios.get('https://jsonplaceholder.typicode.com/users', 5000);
    this.data = njupuk.data;
    console.log(njupuk.data);
    // pada console.log(); bisa terserah, kuncinya data.key.key.key sesuaikan dengan keinginan
    //ingin value apa yang diambil.
};
firstAsync();

// promise 
// axios.get('https://jsonplaceholder.typicode.com/users')
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//   });


// let promise = new Promise((res) => {
//   setTimeout(() => res("Now it's done!"), 5000)
// });

// // wait until the promise returns us a value
// let result = await promise; 

// // "Now it's done!"
// console.log(result);