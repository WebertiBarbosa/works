/* 
Criar um programa que calcula a média das turmas de 
alunos e envia mensagem do cálculo da média.
*/

const alunosDaTurmaA = [
    {
        nome: 'Mayk',
        nota: 10
    },
    {
        nome: 'Diego',
        nota: 8
    },
    {
        nome: 'Weberti',
        nota: 10
    },
    {
        nome: 'Mais um aluno',
        nota: 1
    }
]

const alunosDaTurmaB = [
    {
        nome: 'Cleiton',
        nota: 10
    },
    {
        nome: 'Robson',
        nota: 1
    },
    {
        nome: 'Ciclano',
        nota: 2
    }
    
]

function calculaMedia(alunos) {
    let soma = 0
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }

    const media = soma / alunos.length
    return media
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma) {
    // se a média for maior que 5, parabenizar a turma
    if (media > 5) {
        console.log(`A média da turma ${turma} foi de ${media.toFixed(2)}. Parabéns.`)
    } else {
        console.log(`A média da turma ${turma} é menor que 5.`)
    }
}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')

