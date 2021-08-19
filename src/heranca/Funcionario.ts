export abstract class Funcionario{
    private nome: string
    private salario: number
    private beneficios: string[]

    constructor(nome: string, salario: number, benefecios: string[]){
        this.nome = nome
        this.salario = salario
        this.beneficios = benefecios
    }

    public getNome(): string{
        return this.nome
    }

    public setNome(nome: string): void{
        this.nome = nome
    }

    abstract getSalarioLiquido(): number

    public getSalario(): number{
        return this.salario
    }

    public setSalario(salario: number): void{
        this.salario = salario
    }

    public getBeneficios(beneficios: string[]): string[]{
        return beneficios
    }

    public setBeneficios(beneficio: string): void{
        this.beneficios.push(beneficio)
    }

    public removeBeneficio(beneficio: string): string{
        let index = this.beneficios.indexOf(beneficio)
        if(index == -1){
            return 'valor não encotrado'
        }else{
            this.beneficios.splice(index, 1)
            return `Benefício ${beneficio} foi removido com sucesso`
        }
        
    }
}