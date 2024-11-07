# Exercício 1: Sistema de Gestão de Biblioteca
## Descrição:

## Classe Livro: Título, autor, ISBN, número de páginas, gênero (ficção, não-ficção, etc.).
## Classe Revista: Título, editora, ISSN, número de edições, data de publicação.
## Classe Usuario: Nome, matrícula, tipo (aluno, professor, funcionário), lista de itens emprestados.
## Classe Empréstimo: Data de empréstimo, data de devolução prevista, usuário, item emprestado.

## Tarefas:
### Herança: Crie uma classe ItemBiblioteca que contenha os atributos comuns a livros e revistas (título, data de publicação). Faça com que Livro e Revista herdem de ItemBiblioteca.
### Polimorfismo: Implemente um método obterInformacoes() em cada classe que retorne uma string com as informações específicas de cada tipo de item.
### Método principal: Crie um menu para o usuário interagir com o sistema, permitindo cadastrar livros, revistas, usuários e realizar empréstimos.


# Exercício 2: Sistema de Gestão de Animais de Estimação
## Descrição:

## Classe Animal: Nome, idade, espécie, raça, peso.
## Classe Mamifero: Atributos adicionais: tipo de pelagem, se amamenta.
## Classe Ave: Atributos adicionais: envergadura das asas, tipo de bico.
## Classe Peixe: Atributos adicionais: tamanho do aquário, tipo de alimentação.
## Tarefas:

### Herança: Crie uma hierarquia de classes, onde Mamifero, Ave e Peixe herdam de Animal.
### Polimorfismo: Implemente um método emitirSom() em cada classe, retornando o som característico de cada animal.
### Método principal: Crie um sistema que permita cadastrar diferentes tipos de animais e simular a interação com eles (alimentar, brincar, etc.).

# Exercício 3: Sistema de Gestão de Formas Geométricas
## Descrição:

## Classe Forma: Nome, cor.
## Classe Circulo: Raio.
## Classe Retangulo: Base, altura.
## Classe Triangulo: Base, altura.

## Tarefas:

### Herança: Crie uma hierarquia de classes, onde Circulo, Retangulo e Triangulo herdam de Forma.
### Polimorfismo: Implemente um método calcularArea() em cada classe, retornando a área da forma geométrica.
