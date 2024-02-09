/*Classe Produto:

Descrição: Representa um produto genérico em um estoque, com atributos como nome, quantidade disponível e preço unitário.
Métodos:
Constructor: Inicializa os atributos do produto com os valores passados como parâmetro.
calcularValorTotal(): Calcula e retorna o valor total do produto multiplicando a quantidade disponível pelo preço unitário.
Classe ProdutoPerecivel (Herda de Produto):

Descrição: Representa um produto perecível em um estoque, herdando características da classe Produto e adicionando a funcionalidade de verificar a validade.
Métodos:
Constructor: Chama o construtor da classe pai (Produto) e adiciona o atributo data de validade.
verificarValidade(): Verifica se o produto perecível está dentro da data de validade, retornando true se estiver válido e false caso contrário.
Classe Estoque:

Descrição: Representa o estoque de produtos, contendo funcionalidades para adicionar, remover, verificar disponibilidade e calcular o valor total do estoque.
Métodos:
Constructor: Inicializa o estoque com uma lista vazia de produtos.
adicionarProduto(produto): Adiciona um produto à lista de produtos no estoque.
removerProduto(nome): Remove um produto da lista pelo nome.
verificarEstoqueDisponivel(nome): Verifica e exibe a quantidade disponível de um produto pelo nome.
calcularValorTotalEstoque(): Calcula e exibe o valor total do estoque somando o valor total de cada produto.
Exemplo de Uso:

Criação do Estoque:
Instancia um objeto meuEstoque da classe Estoque.
Adição de Produtos:
Adiciona produtos do tipo Produto e ProdutoPerecivel ao estoque.
Verificação e Cálculos:
Realiza operações como verificar a disponibilidade de produtos, calcular o valor total do estoque e remover um produto específico.
Exibição de Resultados:
Exibe resultados das operações realizadas no estoque.*/

class Produto {
    constructor(nome, quantidade, preco) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
    }

    calcularValorTotal() {
        return this.quantidade + this.preco;
    }
}

class ProdutoPerecivel extends Produto {
    constructor(nome, quantidade, preco) {
        super(nome, quantidade, preco);
        this.dataValidade = new Date(this.dataValidade);
    }

    verificarValidade() {
        const hoje = new Date()
        return hoje <= this.dataValidade;
    }
}

class Estoque {
    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);

    }

    removerProduto(nome) {
        this.produtos = this.produtos.filter(produto => produto.nome !== nome);
    }

    verificarEstoqueDisponivel(nome) {
        const produto = this.produtos.find(produto => produto.nome === nome);
        return produto ? produto.quantidadeDisponivel : 0;
    }

    calcularValorTotalEstoque() {
        return this.produtos.reduce((total, produto) => total + produto.calcularValorTotal(), 0);
    }
}

function adicionarProduto() {
    // Capturar os valores dos campos
    var nome = document.getElementById("nome").value;
    var quantidade = parseInt(document.getElementById("quantidade").value);
    var preco = parseFloat(document.getElementById("preco").value);

    // Criar uma instância do objeto Produto
    var produto = new Produto(nome, quantidade, preco);

    // Adicionar o produto ao estoque
    meuEstoque.adicionarProduto(produto);

    // Atualizar a lista de produtos no estoque
    var listaEstoque = document.getElementById("estoque-lista");
    var item = document.createElement("li");
    item.innerHTML = nome + " - Quantidade: " + quantidade + " - Preço: R$" + preco.toFixed(2);
    listaEstoque.appendChild(item);

    // Atualizar o total do estoque
    var totalEstoque = document.getElementById("total-estoque");
    totalEstoque.innerHTML = "Valor total do estoque: R$" + meuEstoque.calcularValorTotalEstoque().toFixed(2);

    // Limpar os campos
    document.getElementById("nome").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("preco").value = "";
}



const meuEstoque = new Estoque();

meuEstoque.adicionarProduto(new Produto('Arroz', 10, 5));
meuEstoque.adicionarProduto(new ProdutoPerecivel('Feijão', 5,2 , ''));

//console.log('Disponibilidade do Arroz:', meuEstoque.verificarEstoqueDisponivel('Arroz'));
//console.log('Disponibilidade do Feijão:', meuEstoque.verificarEstoqueDisponivel('Feijão'));

//console.log('Valor total do estoque:', meuEstoque.calcularValorTotalEstoque());

meuEstoque.removerProduto('Feijão');

//console.log('Disponibilidade do Feijão após remoção:', meuEstoque.verificarEstoqueDisponivel('Feijão'));
//console.log('Valor total do estoque após remoção:', meuEstoque.calcularValorTotalEstoque());

