function JumlahVolumeDuaKubus(a, b) {
	var total, Vol1, vol2;

	vol1 = a*a*a;
	vol2 = b*b*b;

	total = vol1+vol2;

	return total;
}
alert(JumlahVolumeDuaKubus(5,3));