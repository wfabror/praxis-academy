let a = -5;
b = -2;
c = -6;
d = 0;
e = -1;

if (a > b && a > c && a > d && a > e) {
    console.log(a);
} else if (b > c && b > d && b > e && b > a) {
    console.log(b);
} else if (c > d && c > e && c > a && c > b) {
    console.log(c);
} else if (d > e && d > a && d > b && d > c) {
    console.log(d);
} else {
    console.log(e);
}