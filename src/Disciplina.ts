import { Professor } from "./Professor"

export class Disciplina{
    private nome : string
    private ch : number
    private professor: Professor

    constructor(nome: string, ch: number, professor: Professor){
        this.nome = nome
        this.ch = ch
        this.professor = professor
    }

    getNome(){
        return this.nome 
    }

    getProfessor(){
        return this.professor
    }
    // getCh(){
    //     return this.ch
    // }

    // setNome(nome: string){
    //     this.nome = nome
    // }

    // setCh(ch: int){
    //     this.ch = ch
    // }
    
}