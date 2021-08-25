import { Curso } from "../../src/agregacao/Curso"
import { Disciplina } from "../../src/agregacao/Disciplina"
import { Professor } from "../../src/agregacao/Professor"

describe('Testes curso', () => {
    const NOME_CURSO_ADS = 'ADS'
    const NOME_DISCIPLINA_WEB = 'Web'
    const NOME_DISCIPLINA_ES = 'Enenharia de Software'
    const NOME_PROFESSOR = 'Jesiel'
    
    test('Deve criar um professor', () => {
        const Jesiel = new Professor(NOME_PROFESSOR)
        expect(Jesiel.getNome()).toBe("Jesiel")
    })

    test('Deve criar um curso com o nome ADS', () => {
        const curso = new Curso(NOME_CURSO_ADS)
        expect(curso.getNome()).toBe(NOME_CURSO_ADS)
    })

    test('Deve adicionar uma disciplina ao curso',() => {
        const curso = new Curso(NOME_CURSO_ADS)
        const professor = new Professor(NOME_PROFESSOR)
        const es = new Disciplina(NOME_DISCIPLINA_ES, 100, professor)
        curso.adicionaDisciplinas(es)
        expect(curso.getDisciplinas().length).toBe(1)
        expect(curso.getDisciplinas()[0].getNome()).toBe(NOME_DISCIPLINA_ES)
        expect(curso.getDisciplinas()[0].getProfessor()).toBe(professor)
    })

    test('deve adicionar duas disciplina ao curso', () => {
        const curso = new Curso(NOME_CURSO_ADS)
        const professor = new Professor(NOME_PROFESSOR)
        const web = new Disciplina(NOME_DISCIPLINA_WEB, 100, professor)
        const es = new Disciplina(NOME_DISCIPLINA_ES, 120, professor)
        curso.adicionaDisciplinas(web)
        curso.adicionaDisciplinas(es)
        expect(curso.getDisciplinas().length).toBe(2)
    })

    test('deve remover uma disciplina de curso', () => {
        const curso = new Curso(NOME_CURSO_ADS)
        const professor = new Professor(NOME_PROFESSOR)
        const web = new Disciplina(NOME_DISCIPLINA_WEB, 100, professor)
        const es = new Disciplina(NOME_DISCIPLINA_ES, 120, professor)
        curso.adicionaDisciplinas(web)
        curso.adicionaDisciplinas(es)
        expect(curso.getDisciplinas().length).toBe(2)
        curso.removeDisciplinas(es)
        expect(curso.getDisciplinas().length).toBe(1)
        expect(curso.getDisciplinas()[0]).toBe(web)
        curso.removeDisciplinas(web)
        expect(curso.getDisciplinas().length).toBe(0)
      })

})