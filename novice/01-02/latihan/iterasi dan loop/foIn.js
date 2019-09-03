function dump_props(obj, obj_name) {
    var result = '';
    for (var i in obj) {
        result += obj_name + '.' + i + ' = ' + obj[i] + '<br>';
    }
    result += '<hr>';
    return result;
}
let obj = "car";
let obj_name = "make";
let i = 1

console.log(i);