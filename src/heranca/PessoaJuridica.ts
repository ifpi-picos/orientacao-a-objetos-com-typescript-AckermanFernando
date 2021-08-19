import { Funcionario } from "./Funcionario";

export class PessoaJuridica extends Funcionario{
    
    private cnpj: string

    constructor(nome: string, salario: number, beneficios: string[], cnpj: string){
        super(nome, salario, beneficios)
        this.cnpj = cnpj
        
    }

    getSalarioLiquido(){
        return super.getSalario() - super.getSalario() * 0.05
    }
}