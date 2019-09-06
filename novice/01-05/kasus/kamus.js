//Prototype kamus

let map = new Map([
    ['1', 'str1'],
    ['Chair', 'Kursi'],
    ['Table', 'Meja'],
    [true, 'bool1']
]);

let pilihan = 3;
switch (pilihan) {
    case 1:
        console.log('Masukkan kata');
        console.log(map.get('Chair'));
        break;

    case 2:
        console.log('Input Kata yang ingin ditambahkan');
        console.log(map.set('Blackboard', 'Papan Tulis'));
        break;
    case 3:
        console.log('Hapus kata yang dinginkan!');
        console.log(map.delete('Chair'));
        break;

    default:
        console.log('The result is strange. Really.');
}