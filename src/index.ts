import { Aluno } from "./Aluno"
import { Professor } from "./Professor"

const guilherme = {
    nome: 'Guilherme',
    email: 'guilherme@email.com',
    senha: '123abc'
}

const joaquim = {
    nome: 'Joaquim',
    email: 'joaquim@email.com',
    senha: '123abc'
}

const nubia = {
    nome: 'Núbia',
    email: 'nubia@email.com',
    senha: '123abc'
}

const professoraNubia = new Professor(nubia, 'Português')
const alunoGuilherme = new Aluno(guilherme)
const alunoJoaquim = new Aluno(joaquim)

professoraNubia.login('123abc')
professoraNubia.lancarNota(alunoGuilherme, 9)
professoraNubia.lancarNota(alunoGuilherme, 10)

professoraNubia.lancarNota(alunoJoaquim, 9.5)
professoraNubia.lancarNota(alunoJoaquim, 9)


console.log('Notas Guilherme >>', alunoGuilherme.notas);
console.log('Média Guilherme >>', alunoGuilherme.obterMedia());

console.log('Notas Joaquim >>', alunoJoaquim.notas);
console.log('Média Joaquim >>', alunoJoaquim.obterMedia());

