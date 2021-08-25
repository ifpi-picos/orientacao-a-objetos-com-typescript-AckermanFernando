import { Funcionario } from "./Funcionario";

export class PessoaJuridica extends Funcionario{
    
    private cnpj: string

    constructor(nome: string, salario: number, cnpj: string, ...beneficios: string[]){
        super(nome, salario)
        if(beneficios){
            super.setBeneficios(beneficios)
        }
        this.cnpj = cnpj
        
    }

    getSalarioLiquido(){
        return super.getSalario() - super.getSalario() * 0.05
    }
}