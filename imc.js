// Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

const name = 'Carlos'
const weigth = 84
const height = 1.88

imc = weigth / (height * height)

if (imc>=30) {
    console.log(name, 'você está acima do peso.')
} else {
    console.log(name, 'você não está acima do peso.')
}
