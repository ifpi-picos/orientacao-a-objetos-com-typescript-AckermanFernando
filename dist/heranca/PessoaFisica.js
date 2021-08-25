"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaFisica = void 0;
const Funcionario_1 = require("./Funcionario");
class PessoaFisica extends Funcionario_1.Funcionario {
    constructor(nome, salario, cpf, ...beneficios) {
        super(nome, salario);
        if (beneficios) {
            super.setBeneficios(beneficios);
        }
        this.cpf = cpf;
    }
    getSalarioLiquido() {
        return super.getSalario() - super.getSalario() * 0.1;
    }
}
exports.PessoaFisica = PessoaFisica;
