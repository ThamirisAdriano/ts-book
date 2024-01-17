class Animal {
    private especie: string;
  
    constructor(especie:string){
      this.especie = especie;
    }
  
    getEspecie(): string {
      return this.especie;
    }
  
    fazerSom() {
      console.log("O animal faz um som."); // Método geral para qualquer animal fazer um som.
    }
  }
  
  class Cachorro extends Animal {
    fazerSom() {
      console.log("O cachorro late."); // Especificação do método para um cachorro, substituindo o método geral.
    }
  }
  
  class Gato extends Animal {
    fazerSom() {
      console.log("O gato mia."); // Especificação do método para um gato, substituindo o método geral.
    }
  }
  
  const meuAnimal: Animal = new Cachorro("Maurício corno");
  console.log(meuAnimal.getEspecie());
  meuAnimal.fazerSom(); // Chama o método "fazerSom" para um cachorro, então irá mostrar "O cachorro late."
  
  const meuOutroAnimal: Animal = new Gato("Gato");
  console.log(meuAnimal.getEspecie());
  meuOutroAnimal.fazerSom(); // Chama o método "fazerSom" para um gato, então irá mostrar "O gato mia."
  