function rot13(str){
	let s = ""
	let n = str.length;

	for(let i=0; i<n; i++){
		let num = str.charCodeAt(i)
		let char = String.fromCharCode(num+13)
		s+=char
	}

	console.log(s)
}
rot13("LOHITH")