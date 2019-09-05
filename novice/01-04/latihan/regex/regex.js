var re1 = new RegExp(/\d/g);
var re2 = /\d/g; // \d digunanakan untuk mengambil angka (digit caharacter) pada string yang dimasukkan

var s = 'abc123def vwxyz456';

console.log(s.match(re1));
console.log(s.match(re2));

var myRe = /d(b+)d/g;
var myArray = myRe.exec('cdbbdbsbz');

console.log(s.match(myArray)); //menghasilkan null

var myArray = /d(b+)d/g.exec('cdbbdbsbz');
console.log(myArray); //menghasilkan [ 'dbbd', 'bb', index: 1, input: 'cdbbdbsbz', groups: undefined ]



var myRe = /d(b+)d/g;
var myArray = myRe.exec('cdbbdbsbz');
console.log('The value of lastIndex is ' + myRe.lastIndex); //menghasilkan The value of lastIndex is 5