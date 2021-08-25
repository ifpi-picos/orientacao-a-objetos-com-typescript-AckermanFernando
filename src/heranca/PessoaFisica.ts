import { Funcionario } from "./Funcionario";

export class PessoaFisica extends Funcionario{
    private cpf: string

    constructor(nome: string, salario: number, cpf: string, ...beneficios: string[]){
        super(nome, salario)
        if(beneficios){
            super.setBeneficios(beneficios)
        }
        this.cpf = cpf
    }

    getSalarioLiquido(): number {
        return super.getSalario() - super.getSalario() * 0.1
    }
}