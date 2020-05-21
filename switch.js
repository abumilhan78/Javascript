// var angka = parseInt(prompt('masukan angka :'));
//parseInt fungsi javascript yang memaksa yang dimasukan user menjadi integer
//sama dengan 3 itu operator identitas, type sama typedata nya di seleksi
// if (angka === 1) {
// 	alert('anda memasukan angka 1');
// }

// else if (angka === 2) {
// 	alert('anda memasukan angka 2');
// }

// else {
// 	alert('angka yang anda masukan salah');
// }


// switch (angka) {
// 	case 1:
// 		alert('anda memasukan angka 1');
// 		break;
// 	case 2:
// 		alert('anda memasukan angka 2');
// 		break;
// 	case 3:
// 		alert('anda memasukan angka 3');
// 		break;
// 	default:
// 		alert('angka yang anda masukan salah');
// 		break;
// }

var item = prompt('Masukan Nama Makanan / Minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)');

switch (item) {
	case 'nasi':
	case 'daging':
	case 'susu':
		alert('makanan / minuman SEHAT');
		break;
	case 'hamburger':
	case 'softdrink':
		alert('makanan / minuman TIDAK SEHAT');
		break;
	default:
		alert('Anda memasukan nama makanan / minuman yang salah');
		break;
}