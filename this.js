// this -> adalah sebuah keyword spesial yang secara otomatis didefinisikan disetiap function
// this mengmbalikan objek global


//cara 1 - Function Declaration
// function halo() {
// 	console.log('halo');
// 	console.log(this)
// }
// halo();

//cara 2 - object literal
// var obj = {a : 10, nama : "Mochammad Qaysa"};
// obj.halo = function() {
// 	console.log(this);
// 	console.log('halo');
// }
// obj.halo();
//this mengembalikan object yang bersangkutan


//cara 3 - constructor
function Halo() {
	console.log(this);
	console.log('halo');
}
var obj1 = new Halo();
var obj2 = new Halo();
// this mengembalikan object yang baru dibuat