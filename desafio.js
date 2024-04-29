// #Escrevendo as classes de um Jogo
// 
//  **O Que deve ser utilizado**
// 
// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções
// - Classes e Objetos
// 
// ##Objetivo:
// 
// Crie uma classe genérica que represente um herói de uma aventura e que possua as seguintes propriedades:
// 
// - Nome
// - Idade
//  - Tipo (ex: guerreiro, mago, monge, ninja)
// 
// além disso, deve ter um método chamado atacar que deve atender os seguintes requisitos:
// 
// - exibir a mensagem: "O {tipo} atacou usando {ataque}"
// - onde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
// - e no {ataque} deve seguir uma descrição diferente do tipo, seguindo a tabela abaixo:
// 
// se mago: no ataque exibir (usou magia)
// se guerreiro: no ataque exibir (usou espada)
// se monge: no ataque exibir (usou artes marciais)
// se ninga: no ataque exibir (usou shuriken)
// 
//  ## Saída
// 
// ao final deve-se exibir uma mensagem:
// 
// -"O {tipo} atacou usando {ataque]"
// ex: mago atacou usando magia
// guerreiro atacou usando espada

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo.toLowerCase()) { // Utiliza toLowerCase para garantir que o tipo seja comparado de forma insensível a maiúsculas e minúsculas
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'fez um ataque desconhecido'; // Caso o tipo não seja reconhecido
                break;
        }
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}.`);
    }
}

// Exemplos de uso:
const heroi1 = new Heroi("Merlin", 150, "Mago");
const heroi2 = new Heroi("Arthur", 35, "Guerreiro");
const heroi3 = new Heroi("Liu Kang", 28, "Monge");
const heroi4 = new Heroi("Scorpion", 30, "Ninja");

heroi1.atacar(); // Mago Merlin atacou usando magia.
heroi2.atacar(); // Guerreiro Arthur atacou usando espada.
heroi3.atacar(); // Monge Liu Kang atacou usando artes marciais.
heroi4.atacar(); // Ninja Scorpion atacou usando shuriken.