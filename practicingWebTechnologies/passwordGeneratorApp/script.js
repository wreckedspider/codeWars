const resultE1 = document.getElementById('result')
const lengthE1 = document.getElementById('length')
const uppercaseE1 = document.getElementById('uppercase')
const lowercaseE1 = document.getElementById('lowercase')
const numbersE1 = document.getElementById('numbers')
const symbolsE1 = document.getElementById('symbols')
const generateE1 = document.getElementById('generate')
const clipboardE1 = document.getElementById('clipboard')

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
}

clipboardE1.addEventListener('click', () => {
	const textarea = document.createElement
})