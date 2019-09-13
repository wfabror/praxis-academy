const axios = require('axios');

let square = {
    luas: function(a, c) {
        x = a * c;
        console.log("luas persegi adalah: " + x);

    },
    sisi2: function(b) {
        console.log('ini sisi 2');

    }
}

module.exports = square;