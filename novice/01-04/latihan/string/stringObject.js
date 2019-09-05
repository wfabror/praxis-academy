const foo = new String('foo');
console.log(foo);
typeof foo;

const string1 = '2 + 2'; // create a literal value
const string2 = new String('2 + 2'); // create a String object
eval(string1);
eval(string2);
console.log(eval(string1));
console.log(eval(string2));

const hello = 'Hello, World!';
const helloLength = hello.length;
hello[0] = 'L';
hello[0];

console.log(hello[0] = 'L'); // mengembalikan ke nilai L
console.log(hello[0]); //mengembalikan ke nilai H