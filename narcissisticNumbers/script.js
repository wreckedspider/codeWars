// se introduzindo ao usuário
window.alert('Oi, eu sou um verificador. Minha função é descobrir se um número é narcisista (se ele gosta de se olhar muito no espelho) ou não. Você pode digitar o número que você quer verificar, por favor?');

// pegando as informações principais
var initialNumber = prompt('Digite agora, por favor.');
parseInt(initialNumber);

var howManyDigits = prompt('Quantos dígitos tem o seu número?');
parseInt(howManyDigits);

var input = prompt('Digite cada um dos dígitos separados por vírgula, por favor.');
var digitsNumber = [];
var digitsNumber = input.split(",");

var i = 0;
digitsValue = [i];

while (i<digitsNumber) {

	digitsValue1 = digitsNumber[0]**howManyDigits
	digitsValue[i] = digitsNumber[i+1]**howManyDigits 
	finalNumber = digitsValue[0] + digitsValue[i]
	i++;
}
console.log(finalNumber)




