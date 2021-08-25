"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* globals describe, expect, it */
const Empresa_1 = require("./Empresa");
const PessoaFisica_1 = require("./PessoaFisica");
const PessoaJuridica_1 = require("./PessoaJuridica");
let beneficiosPF;
let benefeciosPJ;
let ifpi = new Empresa_1.Empresa("IFPI");
let Fernando;
let BglCorp;
try {
    Fernando = new PessoaFisica_1.PessoaFisica("Fernando", 5000, "098765423445", beneficiosPF);
    Fernando.setBeneficio("plano de saúde");
    Fernando.setBeneficio("VR");
    Fernando.setBeneficio("Férias");
    BglCorp = new PessoaJuridica_1.PessoaJuridica("BGL Corp", 5000, "23456787653421", benefeciosPJ);
    BglCorp.setBeneficio("Plano de saúde");
    ifpi.addFuncionario(Fernando);
    ifpi.addFuncionario(BglCorp);
}
catch (e) {
    console.error(e);
}
console.log(ifpi.getFuncionarios());
// ifpi.getFuncionarios().forEach(value => {
//     console.log("Nome: " + ifpi.getFuncionarios()[0].getNome())
//     console.log("Salário: " + value)
//     console.log("Identificador: " + value)
// });
