class MaterialBibliografico {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = true;
    }

    realizarEmprestimo() {
        if (this.disponivel == true) {
            this.disponivel = false;
            return true; //emprestimo realizado com sucesso
        } else {
            return false; //material ja emprestado
        }
    }

    realizarDevolucao() {
        if(this.disponivel == false) {
            this.disponivel = true;
            return true; //devolução realizada com sucesso
        } else {
            return false; //material já devolvido previamente
        }
    }
}

class Livro extends MaterialBibliografico {
    constructor(titulo, autor, genero) {
        super(titulo, autor);
        this.genero = genero;
    } 
}

class Revista extends MaterialBibliografico {
    constructor(titulo, autor, categoria) {
        super(titulo, autor);
        this.categoria = categoria;
    }
}

function realizarAcao(acao) {
    console.log("Realizou uma: " + acao);
}

const livros = [
    new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", "Fantasia"),
    new Livro("Harry Potter e a Pedra Filosofal", "J.K. Rowling", "Fantasia"),
    new Livro("Crepúsculo", "Stephenie Meyer", "Romance"),
    new Revista("National Geographic", "National Geographic Society", "Ciência")
];

const selectLivros = document.getElementById("livros");

for(let i = 0; i < livros.length; i++) {
    const livro = livros[i];
    const option = document.createElement("option");
    option.value = i + 1; // adiciona 1 para evitar o valor 0, que representa a opção padrão
    option.text = livro.titulo;
    selectLivros.add(option);
}

