class Animal {
    //3 propriedades básicas (peso, altura, velocidade)
    constructor(peso, altura, velocidade) {
        this.peso = peso;
        this.altura = altura;
        this.velocidae = velocidade;
    }
    //4 comportamentos (nasce, cresce, reproduz, morre)
    nascer() {

    }

    crescer() {

    }

    reproduzir() {

    }

    morrer() {

    }

}

class Mamifero  extends Animal {
    //1 específica
    constructor(peso, altura, velocidade){
        super(peso, altura, velocidade, mamas)
        this.mamas = mamas;
    }
    
    amamentar() {

    }
}

class Reptil extends Animal {
    constructor(peso, altura, velocidade, escamas) {
        super(peso, altura, velocidae);
        this.escamas = escamas;
    }
    
    pesilhotermia() {

    }
}