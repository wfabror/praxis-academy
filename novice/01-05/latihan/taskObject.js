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

function count(user) {
    return Object.keys(user).length; // yang dihitung dalam lengthnya adalah keys dari objek tersebut
}

let user = {
    name: "John",
    age: 20
}

console.log(count(user))