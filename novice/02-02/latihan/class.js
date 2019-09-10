//class use case
function makeClass(phrase) {
    return class {
        sayHi() {
            console.log(phrase);
        }
    }
}

let user = makeClass("Hello");
new user().sayHi();

//get and set use case
class User {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 4) {
            console.log("short name");
            return;
        }
        this._name = value;
    }
}

let user2 = new User("Gorgias");
console.log(user2.name);

//class prperties
class pengguna {
    nama = "Local Network";

    sayHi() {
        console.log(`Hello, ${this.nama}!`);
    }
}

new pengguna().sayHi();

// src= https://javascript.info/class