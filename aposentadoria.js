// Crie um programa para calcular a aposentadoria de uma pessoa.
// O tempo de contribuição mínimo para homens é de 35 anos 
// e, para mulheres, 30 anos;
// Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem
// precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 
// anos na soma;
// Com base nas regras acima imprima na tela as mensagens:
// SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
// SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;

const nome = 'Silvana'
const genero = '5'
const idade = 48
const contribuicao = 23;

const contribuicaoTotal = idade + contribuicao

const homemAposenta = contribuicao >= 35 && contribuicaoTotal >= 95

const mulherAposenta = contribuicao >= 30 && contribuicaoTotal >= 85

if (genero == 'F' && mulherAposenta) 
    console.log (`${nome}, você pode se aposentar!`)
else 
    if (genero == 'M' && homemAposenta)
        console.log (`${nome}, você pode se aposentar!`)
    else   
        console.log (`${nome}, você ainda não pode se aposentar!`)
 


