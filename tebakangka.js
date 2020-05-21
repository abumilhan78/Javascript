var lagi = true;
while (lagi) {
	alert('Tebak Angka Dari 1-10\nKamu Punya 3 Kesempatan');
	var angka = Math.floor(Math.random() * 10)+1;
	var kira = '';
	for (var i = 3; i >= 1; i--) {
		var tebak = prompt('Masukan Angka Tebakan');
		if (i-1 == 0) {
			alert('Maaf Anda Kalah Dalam Permainan Ini\nAngka Yang DiCari : '+angka);
		}

		if (tebak == angka && i-1 != 0) {
		kira = 'Angkanya Tepat Bang!';
		alert(kira+'\nAngka Yang Anda Masukan : '+tebak+'\nAngka Tebakan : '+angka);
		i = 0;
		}else if(tebak > angka  && i-1 != 0){
			kira = 'Angkanya Kelebihan Bang!';
			alert(kira+'\nAyo Masih Ada '+(i-1)+' Kesempatan Lagi!');
		}else if(tebak < angka  && i-1 != 0){
			kira = 'Angkanya Kurang Bang!';
			alert(kira+'\nAyo Masih Ada '+(i-1)+' Kesempatan Lagi!');
		}
		
	}
lagi = confirm('Mau Lagi?');
}
alert('Terima Kasih');