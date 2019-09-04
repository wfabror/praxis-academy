let angka1, angka2;
angka1 = prompt("Masukkan angka pertama", "0");
angka2 = prompt("Masukkan angka kedua", "0");


function perbandingan() {
    if (parseInt(angka1) > parseInt(angka2)) {
        console.log("Angka besar adalah " + angka1);
    } else if (parseInt(angka2) > parseInt(angka1)) {
        console.log("Angka besar adalah " + angka2);
    } else {
        console.log("Angkanya sama");
    }
}
//