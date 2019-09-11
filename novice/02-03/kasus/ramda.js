const R = require('ramda');

//console.log(R);

const duplicate = n => [n, n];
R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]

var x = R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]

console.log(x);