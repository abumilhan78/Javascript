// alert("Hello World");
// prompt('masukan nama anda : ');

// var nama = prompt("masukan nama anda : ");
// alert(nama);

// var tes = confirm("Apakah Anda Yakin?");
// if (tes === true) {
//   alert("User Menekan Tombol Oke");
// } else {
//   alert("User Menekan Tombol Cancel");
// }

alert("Selamat Datang");
var lagi = true;

while (lagi) {
  var nama = prompt("Masukan Nama Anda : ");
  alert("Halo " + nama);
  lagi = confirm("Coba Lagi?");
}

alert("Terima Kasih");
