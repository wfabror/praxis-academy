let letak = 8;
let kosong = "";

for (let i = 0; i < letak; i++) {
    for (let j = 0; j < letak; j++) {
        if ((i + j) % 2 === 0) {
            kosong += " ";
        } else {
            kosong += "#";
        }
    }
    kosong += "\n";
}
console.log(kosong);