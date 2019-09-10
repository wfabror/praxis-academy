//constructor
function hero(name, level) {
    this.name = name;
    this.level = level;
}
hero.prototype.greet = function() {
    return `${this.name} says hello.`;
}

function swordsman(name, level, spell) {
    hero.call(this, name, level);

    this.spell = spell;
}

const sangkuriang = new hero("Sangkuriang", 25, "Thunderslash");
const tangkuban = new swordsman("Tangkuban", 12, "Thuderclap")

console.log(sangkuriang.greet());
console.log(tangkuban);

//class
class pahlawan {
    constructor(nama, tingkat) {
        this.nama = nama;
        this.tingkat = tingkat;
    }
    salam() {
        return `${this.nama} menyapa`;
    }
}

class thief extends pahlawan {
    constructor(nama, tingkat, skill) {
        super(nama, tingkat);

        this.skill = skill;
    }
}

let senarai = new thief("Senarai", 99, "Steal");
console.log(senarai);
console.log(senarai.salam());