import { Funcionario } from "./Funcionario"

export class Empresa{
    private nome: string
    private funcionarios: Funcionario[]

    static empresa(nome: string){
        this.nome = nome
    }

    static empresa(nome: string, funcionarios: Funcionario[]){
        this.nome = nome
        this.funcionarios = funcionarios
    }

    public getNome(): string{
        return this.nome
    }

    public addFuncionario(funcionario: Funcionario): void{
        this.funcionarios.push(funcionario)
    }

    public getFuncionarios(): Funcionario[]{
        return this.funcionarios
    }

}