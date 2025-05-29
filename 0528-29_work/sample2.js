function sample() {
	console.log(name1);
	if (true) {
		let name1 = 2; // if 문 안만 코드 블록 내에서만 참조 가능
	} 
	console.log(name1);
}  
sample();