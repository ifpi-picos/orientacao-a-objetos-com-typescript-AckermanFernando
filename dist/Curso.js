"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curso = void 0;
class Curso {
    constructor(nome) {
        this.disciplinas = [];
        this.nome = nome;
        this.disciplinas = [];
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    adicionaDisciplinas(disciplinas) {
        this.disciplinas.push(disciplinas);
    }
    getDisciplinas() {
        return this.disciplinas;
    }
    removeDisciplinas(disciplina) {
        let index = this.disciplinas.indexOf(disciplina);
        if (index > -1) {
            this.disciplinas.splice(index, 1);
            return this.disciplinas;
        }
        else {
            return console.log("Não encontrado");
        }
    }
}
exports.Curso = Curso;
