console.log("Oi, meu nome é DNAtoRNA, eu sou um programa que converte bases de DNA para bases de RNA. Digite, na ordem, as bases da sua sequência de DNA. (Lembrando que só converto de quatro em quatro bases por molécula!)");

var letra1 = prompt("Qual a primeira base?");
var letra2 = prompt("E a segunda?");
var letra3 = prompt("A terceira?");
var letra4 = prompt("Última?");

if (letra1 == 'T') {
	letra1 = 'U'
}

else if (letra2 == 'T') {
	letra2 = 'U'
}

else if (letra3 == 'T') {
	letra3 = 'U'
}

else if (letra4 == 'T') {
	letra4 = 'U'
};

console.log(letra1 + letra2 + letra3 + letra4);
