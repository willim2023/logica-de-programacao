class Animal {

    //3 propriedades básicas (peso, altura, velocidade)
    constructor(peso, altura, velocidade) {
        this.peso = peso;
        this.altura = altura;
        this.velocidae = velocidae;
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
    constructor(peso, altura, velocidae){
        super(peso, altura, velocidae, mamas)
        this.mamas = mamas;
    }
    
    amamentar() {

    }

}



class Reptil {
    //1 específica
}