function unique(arr) {
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values)); // Hare, Krishna, :-O

function aclean(arri) {
    let map = new Map();

    for (let kata of arri) {
        let sorted = kata.toLowerCase().split('').sort().join('');
        //toLowerCase digunakan untuk mengubah kata menjadi kecil
        //split untuk memisahkan tiap huruf pada kata. contoh : 'P','A','N'
        //sort untuk membandingkan dengan karakter yang sudah ada

        map.set(sorted, kata);
    }

    return Array.from(map.values());
}

let arri = ["nap", "teachers", "cheaters", "PAN", "ear", "ear", "hectares"];
console.log(aclean(arri));




let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

console.log(keys);