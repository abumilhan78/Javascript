// cara menghapus index array

// var arr = ['Mochammad','qaysa',true];
// arr[3] = undefined;

// cara menampilkan isi aray

// var arr = ['Galih','Adnan','Persada','Aziz'];

// for (var i = 0; i < arr.length; i++) {
// 	console.log('Mahasiswa ke-'+(i+1)+' '+arr[i]);
// }

// METHOD PADA ARRAY
var arr = ['Galih','Adnan','Persada','Aziz'];
// 1. Join
// console.log(arr.join(' - '));

// 2. Push, pop
// arr.push('Doddy'); //menambahkan elemen diakhir index

// arr.pop(); //menghapus elemen diakhir index


//3. unshift & shift

//arr.unshift('Doddy'); //menambahkan elemen diawal index

// arr.shift();



// 4. splice
//splice(indexawal, mau dihapus berapa, elemen baru)
// arr.splice(2, 0, 'Doddy', 'Franco');


//5. slice
//slice(awal,akhir);
// var arr2 = arr.slice(1, 3)
// console.log(arr2.join(' - '));



// 6. Foreach
//var angka = [1,2,3,4,5,6,7,8];
// angka.forEach(function(e) {
// 	console.log(e);
// });

// arr.forEach(function(e/*Ini Element*/, i/*Ini Index*/) {
// 	console.log('Mahasiswa Ke'+(i+1)+' Adalah : '+e);
// });


// 7. Map
// var angka2 = angka.map(function(e) {
// 	return e*2;
// });
// console.log(angka2.join(' - '));


//8. Sort
// var acak = [34,5,323,56,45,23];
// acak.sort(function(a,b) {
// 	return a-b;
// });
// console.log(acak.join(' - '))


// 9. Filter & Find
var angka = [1,2,10,5,20,3,6,8,4];
// var angka2 = angka.filter(function(x) {
// 	return x > 5;
// });

var angka2 = angka.find(function(x) {
	return x > 5;
});

console.log(angka2);