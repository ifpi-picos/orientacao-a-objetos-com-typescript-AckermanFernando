import { Curso } from "./Curso";
import { Disciplina } from "./Disciplina";
import { Professor } from "./Professor";

const Jesiel = new Professor('Jesiel')
const Aislan = new Professor('Aislan')
const web = new Disciplina('Programação para Web', 50, Jesiel)
const es = new Disciplina('Engenharia de Software I', 70, Aislan)
const ads = new Curso('ADS')
ads.adicionaDisciplinas(web)
ads.adicionaDisciplinas(es)

console.log('Curso: ', ads.getNome())
console.log('Disciplinas', ads.getDisciplinas())

