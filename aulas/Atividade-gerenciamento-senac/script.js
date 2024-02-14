class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    toString() {
        return `Nome: ${this.nome}, Idade: ${this.idade}`;
    }
}

class Aluno extends Pessoa {
    constructor(nome, idade, matricula) {
        super(nome, idade);
        this.matricula = matricula;
    }

    estudar() {
        console.log(`${this.nome} está estudando.`);
    }
}

class Professor extends Pessoa {
    constructor(nome, idade, areaDeAtuacao) {
        super(nome, idade);
        this.areaDeAtuacao = areaDeAtuacao;
    }

    ensinar() {
        console.log(`${this.nome} está ensinando.`);
    }
}

class Turma {
    constructor(professor, alunos) {
        this.professor = professor;
        this.alunos = alunos;
    }

    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }

    removerAluno(matricula) {
        this.alunos = this.alunos.filter(aluno => aluno.matricula !== matricula);
    }

    realizarAula() {
        this.professor.ensinar();

        this.alunos.forEach(aluno => {
            aluno.estudar();
        });
    }
}

class Senac {
    constructor() {
        this.turmas = [];
    }

    criarTurma(professor, alunos) {
        const turma = new Turma(professor, alunos);
        this.turmas.push(turma);
        console.log("Turma criada com sucesso.");
    }

    removerTurma(turma) {
        this.turmas = this.turmas.filter(t => t !== turma);
        console.log("Turma removida com sucesso.");
    }
}

// Exemplo de uso:

const senac = new Senac();


const aluno1 = new Aluno("João", 20, "123");
const aluno2 = new Aluno("Pedro", 22, "456");
const professor = new Professor("João", 30, "Informática");

senac.criarTurma(professor1, [aluno1, aluno2]);

senac.turmas[0].adicionarAluno(new Aluno("Maria", 25, "789"));
senac.turmas[0].removerAluno("123");

senac.turmas[0].realizarAula();
