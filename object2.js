// Membuat Object
// 1. Object Literal

var mhs = {
	nama : "Mochammad Qaysa",
	nrp : "123432423",
	email : 'qaysa@yahoo.com',
	jurusan : 'Teknik Informatika'
}



// 2, Function Declaration

function buatObjectMhs(nama,nrp,email,jurusan) {
	var mhs = {};
	mhs.nama = nama;
	mhs.nrp = nrp;
	mhs.email = email;
	mhs.jurusan = jurusan;

	return mhs;
}

var mhs3 = buatObjectMhs("Deva Sahara","12341243","SaharaDev@gmail.com", "Tata Boga");




// 3. Constructor

function Mahasiswa(nama,nrp,email,jurusan) {
	this.nama = nama;
	this.nrp = nrp;
	this.email = email;
	this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa("Wahyu Candra Utama", "23234223", "wahyucandra@gmail.com", "Teknik Informatika");