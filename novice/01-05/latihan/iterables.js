let range = {
    from: 1,
    to: 6
};

// 1. call to for..of initially calls this
range[Symbol.iterator] = function() { //menggunakan fungsi iterator yang digunakan untuk memanggil urutan

    // ...it returns the iterator object:
    // 2. Onward, for..of works only with this iterator, asking it for next values
    return {
        current: this.from,
        last: this.to,

        // 3. next() is called on each iteration by the for..of loop
        next() {
            // 4. it should return the value as an object {done:.., value :...}
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    };
};

// now it works!
for (let num of range) {
    console.log(num); // 1, then 2, 3, 4, 5
}

let str = "Hello";

// does the same as
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value); // outputs characters one by one
}

let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
};

let arr = Array.from(arrayLike); // (*)
console.log(arr.pop()); // World (method works)

let arri = Array.from(range);
console.log(arri);

let arru = Array.from(range, num => num * num);

console.log(arru); // 1,4,9,16,25


function slice(str, start, end) {
    return Array.from(str).slice(start, end).join('');
}

let stra = '𝒳😂𩷶';

console.log(slice(stra, 1, 3)); // 😂𩷶

// the native method does not support surrogate pairs
console.log(stra.slice(1, 3)); // garbage (two pieces from different surrogate pairs)