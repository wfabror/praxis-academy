let d = new Date(2012, 1, 20, 10, 12);
console.log(d)



function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

    return days[date.getDay()];
}
let date = new Date(2010, 0, 3); // 3 Jan 2012
console.log(getWeekDay(date)); // should output "TU"




function getLocalDay(dated) { //localdayEurope
    let daysa = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU', ];

    return days[dated.getDay()];
}
let dated = new Date(2012, 0, 3);
console.log(getWeekDay(dated));