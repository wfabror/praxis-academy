let human = function(person, age) {
    this.person = person;
    this.age = age;
    this.info = function() {
        console.log(this);
        setTimeout(() => {
            console.log(this.person + " adalah " + this.age + " years old ");

        }, 3000);
    }
}
let person1 = new human("George", 25);
person1.info();