import { Disciplina } from "./Disciplina"

export class Curso {
    private nome: string
    private disciplinas = []

    constructor(nome: string){
        this.nome = nome 
        this.disciplinas = []
    }

    getNome(){
        return this.nome
    }

    setNome(nome: string){
        this.nome = nome
    }

    adicionaDisciplinas(disciplinas : Disciplina){
        this.disciplinas.push(disciplinas)
    }

    getDisciplinas(){
        return this.disciplinas
    }

    removeDisciplinas(disciplina: Disciplina){
        let index = this.disciplinas.indexOf(disciplina)
        if(index > -1){
            this.disciplinas.slice(index, 1)
        }else{
            return console.log("Não encontrado")
        }
    }
}