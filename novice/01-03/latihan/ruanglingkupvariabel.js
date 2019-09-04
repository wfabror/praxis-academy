//Function memiliki 2 lingkup variabel : Variabel Global dan Variabel Lokal

//contoh
let x = 4; //variabel global

function angka() {
    let x = 7; //variabel lokal
    console.log(x);
}
angka();