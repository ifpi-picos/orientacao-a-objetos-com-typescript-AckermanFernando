import { Funcionario } from "./Funcionario"

export class Empresa{
    private nome: string
    private funcionarios: Funcionario[]

    // Empresa(nome: string){
    //     this.nome = nome
    // }

    constructor(nome: string, ...funcionarios: Funcionario[]){
        this.nome = nome
        if(funcionarios){this.funcionarios = funcionarios}
    }

    public getNome(): string{
        return this.nome
    }

    public addFuncionario(funcionario: Funcionario): void{
        this.funcionarios.unshift(funcionario)
    }

    public getFuncionarios(): Funcionario[]{
        return this.funcionarios
    }

}