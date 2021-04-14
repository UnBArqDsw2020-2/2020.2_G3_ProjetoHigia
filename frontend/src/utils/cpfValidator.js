const isAllEqual = (value) => {
	for (let i = 1; i < value.length; i++) {
		if (value[i] != value[i - 1]) return false;
	}
	return true;
};

const cpfValidator = (cpf) => {
	if (cpf == "") return false;
	if (cpf.length != 11 || isAllEqual(cpf)) return false;
	let add = 0;
	let rev;
	for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
	rev = 11 - (add % 11);
	if (rev == 10 || rev == 11) rev = 0;
	if (rev != parseInt(cpf.charAt(9))) return false;
	add = 0;
	for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
	rev = 11 - (add % 11);
	if (rev == 10 || rev == 11) rev = 0;
	if (rev != parseInt(cpf.charAt(10))) return false;
	return true;
};

export default cpfValidator;
