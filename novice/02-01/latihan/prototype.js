function Person(name, job, yearOfBirth) {
    this.name = name;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
}

Person.prototype.calculateAge = function() {
    console.log('The current Age is: ' + (2019 - this.yearOfBirth));
}
console.log(Person.prototype);

let Person1 = new Person('Holo', 'Teacher', 1991);
console.log(Person1);
let Person2 = new Person("Christ", "Racer", 1994);
console.log(Person2);

Person1.calculateAge();
Person2.calculateAge();

//source: https://www.geeksforgeeks.org/prototype-in-javascript/

function animal(name) {
    this.name = name;
    this.getName = function() {
        return "Animal name is ==> " + this.name;
    }
}

var a = new animal('Cat');
console.log('a object ===> ', a);
console.log('a getName() ===> ', a.getName());
console.log('a.constructor === Animal', a.constructor === animal);