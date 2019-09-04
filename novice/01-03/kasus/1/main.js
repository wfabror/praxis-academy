function tellFortune(jobTitle, geoLocation, partner, numKids) {
    var future = "Kamu akan memiliki pekerjaan " + jobTitle + ", di " +
        geoLocation + ", dan menikah dengan " + partner + ", mempunyai " + numKids + " anak. " + "\t";
    document.write(future);
}

tellFortune("Football", "Amerika", "Anna", "10");
tellFortune("Guru", "Jepang", "Alice", "2");

// jobTitle = prompt("Masukkan Kerjamu");
// geoLocation = prompt("Masukkan Lokasimu");
// partner = prompt("MAsukkan Kekasihmu");
// numKids = prompt("Masukkan anakmu")

// document.write(tellFortune)