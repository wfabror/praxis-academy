const axios = require('axios');
const PI = 3.14;

let total = {
    sumi: function(num, tot) {
        sumtot = num + tot;
        console.log('Sum = ' + sumtot);

    }
}

let mult = {
    kali: function(num1, num2) {
        kali = num1 * num2;
        console.log("Mult = " + kali);
    }
}

module.exports = { total, mult };