"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaJuridica = void 0;
const Funcionario_1 = require("./Funcionario");
class PessoaJuridica extends Funcionario_1.Funcionario {
    constructor(nome, salario, cnpj, ...beneficios) {
        super(nome, salario);
        if (beneficios) {
            super.setBeneficios(beneficios);
        }
        this.cnpj = cnpj;
    }
    getSalarioLiquido() {
        return super.getSalario() - super.getSalario() * 0.05;
    }
}
exports.PessoaJuridica = PessoaJuridica;
