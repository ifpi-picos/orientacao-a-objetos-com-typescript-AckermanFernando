/* globals describe, expect, it */
import { Empresa } from "./Empresa";
import { Funcionario } from "./Funcionario";
import { PessoaFisica } from "./PessoaFisica";
import { PessoaJuridica } from "./PessoaJuridica";


let beneficiosPF: string
let benefeciosPJ: string


let ifpi: Empresa = new Empresa("IFPI") 

let Fernando: Funcionario
let BglCorp: Funcionario

try{
    Fernando = new PessoaFisica("Fernando", 5000, "098765423445", beneficiosPF)
    Fernando.setBeneficio("plano de saúde")
    Fernando.setBeneficio("VR")
    Fernando.setBeneficio("Férias")
    BglCorp = new PessoaJuridica("BGL Corp", 5000, "23456787653421", benefeciosPJ)
    BglCorp.setBeneficio("Plano de saúde")
    ifpi.addFuncionario(Fernando)
    ifpi.addFuncionario(BglCorp)
}catch(e){
    console.error(e)
}

console.log(ifpi.getFuncionarios())
// ifpi.getFuncionarios().forEach(value => {
//     console.log("Nome: " + ifpi.getFuncionarios()[0].getNome())
//     console.log("Salário: " + value)
//     console.log("Identificador: " + value)
// });
