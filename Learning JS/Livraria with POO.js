class Livro {
    #preco;

    constructor(titulo, autor, preco) {
        this.titulo = titulo;
        this.autor = autor;
        this.setPreco(preco);
    }

    setPreco(novoPreco) {
        if (novoPreco >= 0) {
            this.#preco = novoPreco;
        } else {
            console.error("Erro: O preço não pode ser negativo.");
            this.#preco = 0;
        }
    }

    getPreco() {
        return this.#preco;
    }

    detalhesDoLivro() {
        return `Título: ${this.titulo}, Autor: ${this.autor}, Preço: R$${this.getPreco().toFixed(2)}`;
    }
}

class Ebook extends Livro {
    constructor(titulo, autor, preco, formato) {
        super(titulo, autor, preco);
        this.formato = formato;
    }

    detalhesDoLivro() {
        return `${super.detalhesDoLivro()}, Formato: ${this.formato}`;
    }
}

class Audiobook extends Livro {
    constructor(titulo, autor, preco, duracaoEmMinutos) {
        super(titulo, autor, preco);
        this.duracao = duracaoEmMinutos;
    }

    detalhesDoLivro() {
        return `${super.detalhesDoLivro()}, Duração: ${this.duracao} min`;
    }
}

class Livraria {
    constructor() {
        this.catalogo = [];
    }

    adicionarLivro(livro) {
        this.catalogo.push(livro);
    }

    listarCatalogo() {
        console.log("\n--- Catálogo da Livraria ---");
        this.catalogo.forEach(livro => {
            console.log(livro.detalhesDoLivro());
        });
    }

    buscarLivroPorAutor(autor) {
        const livrosEncontrados = this.catalogo.filter(livro => {
            return livro.autor.toLowerCase() === autor.toLowerCase();
        });
        return livrosEncontrados;
    }
}

// --- Exemplo de Uso ---

const minhaLivraria = new Livraria();

const livroFisico = new Livro("A Arte da Guerra", "Sun Tzu", 35.50);
const ebook = new Ebook("O Príncipe", "Nicolau Maquiavel", 19.90, "PDF");
const audiobook = new Audiobook("1984", "George Orwell", 45.00, 720);

minhaLivraria.adicionarLivro(livroFisico);
minhaLivraria.adicionarLivro(ebook);
minhaLivraria.adicionarLivro(audiobook);

livroFisico.setPreco(-10);

minhaLivraria.listarCatalogo();

console.log("\n--- Livros do autor 'Sun Tzu' ---");
const resultadoBusca = minhaLivraria.buscarLivroPorAutor("Sun Tzu");

// Verificando se algum livro foi encontrado
if (resultadoBusca.length > 0) {
    resultadoBusca.forEach(livro => {
        console.log(livro.detalhesDoLivro());
    });
} else {
    console.log("Nenhum livro encontrado para este autor.");
}