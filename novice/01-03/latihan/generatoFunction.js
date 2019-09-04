function* host() {
    yield 'r';
    yield 'e';
    yield 'd';
}

var str = "";
for (let val of host()) {
    str = str + val;
}

console.log(str);