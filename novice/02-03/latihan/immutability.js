let nama = "Agil";
nama = "Firda";

console.log(nama);


const namaTetangga = "Ari";;

console.log(namaTetangga);

const namaBuah = ['Apel', 'Jeruk'];
namaBuah.push = ('Dragon');

console.log(namaBuah);

var immutableHobbies = ["Reading"];
var newUpdatedImmutableHobbiesES5 = immutableHobbies.concat("Gaming");

console.log(immutableHobbies); // ["Reading"]
console.log(newUpdatedImmutableHobbiesES5); // ["Reading", "Gaming"];

var newUpdatedImmutableHobbiesES6 = [...immutableHobbies, "Gaming"];

console.log(newUpdatedImmutableHobbiesES6); // ["Reading", "Gaming"];