function getLastDayofMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

console.log(getLastDayofMonth(2012, 0)); //Januari
console.log(getLastDayofMonth(2012, 3)); //april