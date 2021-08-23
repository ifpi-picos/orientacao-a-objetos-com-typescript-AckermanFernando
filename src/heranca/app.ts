import { Empresa } from "./Empresa";
import { Funcionario } from "./Funcionario";
import { PessoaFisica } from "./PessoaFisica";
import { PessoaJuridica } from "./PessoaJuridica";


let beneficiosPF: string[]
beneficiosPF.push("plano de saúde");
beneficiosPF.push("VR");
beneficiosPF.push("Férias");

let benefeciosPJ: string[]
benefeciosPJ.push('Plano de saúde')

let ifpi: Empresa = new Empresa("IFPI") 

let Fernando: Funcionario
let BglCorp: Funcionario

try{
    Fernando = new PessoaFisica("Fernando", 5000, beneficiosPF, "098765423445")
    BglCorp = new PessoaJuridica("BGL Corp", 5000, benefeciosPJ, "23456787653421")
    ifpi.addFuncionario(Fernando)
    ifpi.addFuncionario(BglCorp)
}catch(e){
    console.error(e)
}

ifpi.getFuncionarios().forEach(value => {
    console.log("Nome: " + value)
    console.log("Salário: " + value)
    console.log("Identificador: " + value)
});
