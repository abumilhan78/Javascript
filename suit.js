var tanya = true;
while(tanya){
//menangkap pilihan player
var p = prompt('Choose your character : gajah, semut, orang');


//menangkap pilihan computer
//membangkitkan bilangan random
var comp = Math.random();

if (comp < 0.34 ) {
	comp = 'gajah';
}else if (comp >= 0.34 && comp < 0.67) {
	comp = 'orang';
}else{
	comp = 'semut';
}

var hasil = '';
//menentukan rules
if (p == comp) {
	hasil = 'SERI!';
}

else if(p == 'gajah'){
	// if (comp == 'orang') {
	// 	hasil = 'MENANG!';
	// }else {
	// 	hasil='KALAH'
	// }
	hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
}

else if (p == 'orang') {
	hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
}

else if (p == 'semut') {
	hasil = (comp == 'gajah') ? 'MENANG!' : 'KALAH!';
}

else{
	hasil = 'Memasukan Pilihan Yang Salah';
}

//tampilkan hasilnya
alert('Kamu Memilih : '+p+' dan Komputer Memilih : '+comp+'\nMaka Hasilnya : Kamu '+hasil);

tanya = confirm('Lagi?');
}

alert('Terima Kasih Sudah Bermain :)');