import { Empresa } from "../../src/heranca/Empresa"
import { Funcionario } from "../../src/heranca/Funcionario"
import { PessoaFisica } from "../../src/heranca/PessoaFisica"
import { PessoaJuridica } from "../../src/heranca/PessoaJuridica"

describe('Testes de empresa', ()=> {
    const NOME_EMPRESA = 'ifpi'
    
    let beneficiosPF: string[] = ["plano de saúde", "VR", "Férias"]
    let beneficio: string
    // beneficiosPF.push("") 
    // beneficiosPF.push("VR")
    // beneficiosPF.push("")

    let FUNCIONARIO_FERNANDO: Funcionario
    let FUNCIONARIO_QBLCORP: Funcionario
    let funcionarios: Funcionario[] = [FUNCIONARIO_FERNANDO, FUNCIONARIO_QBLCORP]

    test('Deve adicionar uma empresa apenas com o nome', () => {
        const empresa = new Empresa(NOME_EMPRESA)
        expect(empresa.getNome()).toBe(NOME_EMPRESA)
    })

    test('Deve adicionar uma empresa com funcionários', () => {      
        FUNCIONARIO_FERNANDO = new PessoaFisica('Fernando', 2000, '12345675543')
        FUNCIONARIO_QBLCORP = new PessoaJuridica('QBLCORP', 4000, '98756434546576')
        
        let funcionariosExpect: Funcionario[] = [ FUNCIONARIO_FERNANDO, FUNCIONARIO_QBLCORP]

        const empresa = new Empresa(NOME_EMPRESA, FUNCIONARIO_FERNANDO, FUNCIONARIO_QBLCORP)

        expect(empresa.getFuncionarios()).toStrictEqual(funcionariosExpect)
    })

    test('Deve adicionar funcionários a empresa', () => {
        FUNCIONARIO_FERNANDO = new PessoaFisica('Fernando', 2000, '12345675543')
        FUNCIONARIO_QBLCORP = new PessoaJuridica('QBLCORP', 4000, '98756434546576')
        
        let funcionariosExpect: Funcionario[] = [ FUNCIONARIO_QBLCORP, FUNCIONARIO_FERNANDO]

        const empresa = new Empresa(NOME_EMPRESA)

        empresa.addFuncionario(FUNCIONARIO_FERNANDO)
        empresa.addFuncionario(FUNCIONARIO_QBLCORP)

        expect(empresa.getFuncionarios()).toStrictEqual(funcionariosExpect)
    })

    test('Deve adicionar funcionários com seus benefícios', () => {
        FUNCIONARIO_FERNANDO = new PessoaFisica('Fernando', 2000, '12345675543', "plano de saúde", "VR", "Feria")
        FUNCIONARIO_QBLCORP = new PessoaJuridica('QBLCORP', 4000, '98756434546576', "plano de saúde")
        
        let funcionariosExpect: Funcionario[] = [ FUNCIONARIO_QBLCORP, FUNCIONARIO_FERNANDO]

        const empresa = new Empresa(NOME_EMPRESA)

        empresa.addFuncionario(FUNCIONARIO_FERNANDO)
        empresa.addFuncionario(FUNCIONARIO_QBLCORP)

        expect(empresa.getFuncionarios()).toStrictEqual(funcionariosExpect)
    })

})