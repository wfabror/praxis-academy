for (let angka = 0; angka <= 100; angka++) {
    let output = "";
    if (angka % 3 == 0) {
        output += "fizz"
    }
    if (angka % 5 == 0) {
        output += "bizz"
    }
    console.log(output || angka);
}