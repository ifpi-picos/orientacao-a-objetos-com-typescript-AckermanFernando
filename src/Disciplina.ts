import { Professor } from "./Professor"

export class Disciplina{
    private nome : string
    private ch : int
    private professor: Professor

    constructor(nome: string, ch: int, professor: Professor){
        this.nome = nome
        this.ch = ch
        this.professor = professor
    }

    getNome(){
        return this.nome 
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