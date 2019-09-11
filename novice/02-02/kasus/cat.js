class cat {
    constructor(jenis, umur) {
        this.jenis = jenis;
        this.umur = umur;
        this.feed = 0;
        this.sleep = 0;
        this.pet = 0;
    }

    feed() {
        a = this.feed + 1;
        return "Cat feeded | Status feed: " + a;

    }
    sleep() {

    }
    pet() {

    }
    static isFeed(cat) {
        if (cat.feed === 0) {
            this.feed = this.feed + 1
        }
    }

}
// class tiredness extends cat {
//     constructor(jenis, umur, ) {


//     }
//     class lonliness extends cat {

//     }
//     class hunger extends cat {

//     }
//     class happiness extends cat {

//     }
// }
var anggora = new cat("White", 3);

console.log(anggora.isfeed());