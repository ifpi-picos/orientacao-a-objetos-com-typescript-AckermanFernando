"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
class Funcionario {
    constructor(nome, salario, ...beneficios) {
        this.nome = nome;
        this.salario = salario;
        if (beneficios) {
            this.beneficios = beneficios;
        }
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getSalario() {
        return this.salario;
    }
    setSalario(salario) {
        this.salario = salario;
    }
    getBeneficios() {
        return this.beneficios;
    }
    setBeneficio(beneficio) {
        this.beneficios.push(beneficio);
    }
    setBeneficios(beneficio) {
        this.beneficios = beneficio;
    }
    removeBeneficio(beneficio) {
        let index = this.beneficios.indexOf(beneficio);
        if (index == -1) {
            return 'valor não encotrado';
        }
        else {
            this.beneficios.splice(index, 1);
            return `Benefício ${beneficio} foi removido com sucesso`;
        }
    }
}
exports.Funcionario = Funcionario;
