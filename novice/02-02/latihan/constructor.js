//constructor use case
//prototype use case
function vehicle(make, model, color) {
    this.make = make,
        this.model = model,
        this.color = color,
        this.getName = function() {
            return this.make + " " + this.model
        }
}

let mobil = new vehicle("Buggati", "Veyron", "Silver");
let mobil2 = new vehicle("Jeep", "4X4", "Black");

console.log(mobil);
console.log(mobil2);

var buggati = new vehicle("Buggati", "Veyron", "Silver");

console.log(vehicle.prototype.year = "2018");
console.log(buggati.getName());
console.log(buggati.year);


//class use case
class phone {
    constructor(merk, type, warna) {
        this.merk = merk;
        this.type = type;
        this.warna = warna;
    }
    getName2() {
        return this.merk + " " + this.type;
    }
}

let xiaomi = new phone("Xiaomi", "5A", "Black")
console.log(xiaomi);

class smart extends phone {
    getName2() {
        return this.merk + " masuk ke dapalam child class";
    }
}

let samsung = new smart("Samsung", "S10", "Blue");
console.log(samsung.getName2())


//src:https://medium.com/tech-tajawal/javascript-classes-under-the-hood-6b26d2667677