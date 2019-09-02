/*latihan javascript hari pertama

/* latihan conditional
let iceCream = 'chocolate';
if (iceCream === 'chocolate') {
    alert('Yay, I love chocolate ice cream!');
} else {
    alert('Awwwa, but chocolate is not my favorite...');
}
*/

/* latihan function
let myVariable = document.querySelector('h1');
alert('ini dari fungsi myVariable');

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
*/

/* latihan event
event digunakan ketika ada interaksi antara user dan komputer
document.querySelector('html').onclick = function() {

    alert('Ouch! Stop poking me!')
}
*/

//untuk mengganti icon, kedua gambar harus memiliki ukuran yang sama
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src')
    if (mySrc === 'img/firefox2.png') {
        myImage.setAttribute('src', 'img/firefox-icon.png');
    } else {
        myImage.setAttribute('src', 'img/firefox2.png');
    }
}

//menambahkan personal message
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Masukkan namamu.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Selamat datang di Firefoc, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Selamat datang di Firefoc, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}