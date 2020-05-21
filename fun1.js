function tambah() {
	var hasil = 0;
	for (var i = 0; i < arguments.length; i++) {
		hasil += arguments[i];
	}
	return hasil;
}

function kali(a,b) {
	return a*b;
}


var hasil = tambah(4,3,5,7,6,4);
console.log(hasil);