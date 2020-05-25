var penumpang = [];
var tambahPenumpang = function(nama, penumpang) {
	if (penumpang.length == 0) {
		penumpang.push(nama);
		return penumpang;
	}
	else{
		for (var i = 0; i < penumpang.length; i++) {
			if (penumpang[i] == undefined) {
				penumpang[i] = nama;
				return penumpang;
			}
			else if(penumpang[i] == nama){
				console.log('Penumpang Bernama '+penumpang[i]+' Sudah Ada Dalam Data');
				return penumpang;
			}
			else if (i == penumpang.length-1) {
				penumpang.push(nama);
				return penumpang;
			}
		}
	}
}

var hapusPenumpang = function(nama,penumpang) {
	

	if (penumpang.length == 0) {
		console.log('Angkotnya Kosong coeg');
	}

	else{
		for (var i = 0; i < penumpang.length; i++) {
			if (penumpang[i] == nama) {
				penumpang[i] = undefined;
			}
			else if(i == penumpang.length -1){
				console.log(nama + 'Tidak Ada Dalam Angkot');
			}
		}
	}

	return penumpang;
}