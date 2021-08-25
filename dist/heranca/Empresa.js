"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
class Empresa {
    // Empresa(nome: string){
    //     this.nome = nome
    // }
    constructor(nome, ...funcionarios) {
        this.nome = nome;
        if (funcionarios) {
            this.funcionarios = funcionarios;
        }
    }
    getNome() {
        return this.nome;
    }
    addFuncionario(funcionario) {
        this.funcionarios.unshift(funcionario);
    }
    getFuncionarios() {
        return this.funcionarios;
    }
}
exports.Empresa = Empresa;
