let user = {
    name: "John",
    age: 30
};

console.log(Object.keys(user)); // menampilkan kata kuncinya
console.log(Object.values(user)); // menampilkan nilai kata kuncinya
console.log(Object.entries(user)); // menampilkan masuk yang ada pada object

let usar = {
    name: "Emma",
    age: 21
};

// loop over values
for (let value of Object.values(usar)) {
    console.log(value); // John, then 30
}

//console.log(Object.values(value))

let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

let doublePrices = Object.fromEntries(
    // convert to array, map, and then fromEntries gives back the object
    Object.entries(prices).map(([key, value]) => [key, value * 2])
);

console.log(Object.keys(doublePrices));
console.log(Object.values(doublePrices));
//alert(doublePrices.meat); // 8

function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }

    return sum;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(sumSalaries(salaries))