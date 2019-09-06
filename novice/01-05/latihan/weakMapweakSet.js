let john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");

john = null;

console.log(weakMap)



let visitedSet = new WeakSet();

let thor = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(thor); // John visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(thor); // John again

// visitedSet has 2 users now

// check if John visited?
console.log(visitedSet.has(thor)); // true

// check if Mary visited?
console.log(visitedSet.has(mary)); // false

thor = null;