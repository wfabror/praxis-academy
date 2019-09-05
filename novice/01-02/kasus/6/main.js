var murid = [
    ['David', 80],
    ['Vinoth', 77],
    ['Divya', 88],
    ['Ishitha', 95],
    ['Thamas', 68]
];

var avrgMarks = 0;

for (var i = 0; i < murid.length; i++) {
    avrgMarks += murid[i][1];
    var avg = (avrgMarks / murid.length);
}

console.log("Average grade " + (avrgMarks) / murid.length);

if (avg < 60) {
    console.log("Grade : F");
} else if (avg < 70) {
    console.log("Grade : D");
} else if (avg < 80) {
    console.log("Grade : C")
} else if (avg < 90) {
    console.log("Grade : B");
} else if (avg < 100) {
    console.log("Grade : A ")
}