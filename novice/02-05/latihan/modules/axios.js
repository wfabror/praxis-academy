const axios = require('axios');

axios.post('https://jsonplaceholder.typicode.com/users', {
        username: 'root',
        password: '123'
    })
    .then(function(res) {
        const { name } = res.data.data; //menyimpan dilocalstorage misal ya!
        axios.get('https://jsonplaceholder.typicode.com/users', {
                headers: {
                    authorization: `Bearer ${name}`
                }
            })
            .then(function(response) {
                console.log(response.data);
            })
            .catch(function(error) {
                console.log(error);
            });
    })
    .catch(function(error) {
        console.log(error);
    });