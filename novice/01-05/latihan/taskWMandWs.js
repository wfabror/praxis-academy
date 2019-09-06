let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

let readMessages = new WeakSet();
readMessages.add(messages[0]);
readMessages.add(messages[1]);

readMessages.add(messages[0]);

console.log("Read Messages 0: " + readMessages.has(messages[0]));
console.log("Read Messages 1: " + readMessages.has(messages[1]));
console.log("Read Messages 2: " + readMessages.has(messages[2])); //false karena tidak ditambahkan weakset

let readMap = new WeakMap();
readMap.set(messages[0], new Date(2017, 0, 1));
console.log(readMap.set(messages[0], new Date(2017, 0, 1)));