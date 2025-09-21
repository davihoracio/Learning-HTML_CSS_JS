class Perfil {
    constructor(nome, profissao, imagemUrl) {
        this.nome = nome;
        this.profissao = profissao;
        this.imagemUrl = imagemUrl;
    }

    gerarHTML() {
        return `
            <div class="cartao-perfil">
                <button class="botao-remover">X</button>
                <img src="${this.imagemUrl}" alt="Foto de ${this.nome}">
                <h3>${this.nome}</h3>
                <p>${this.profissao}</p>
            </div>
        `;
    }
}

const form = document.getElementById('form-perfil');
const containerCartoes = document.getElementById('container-cartoes');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const profissao = document.getElementById('profissao').value;
    const imagemUrl = document.getElementById('imagemUrl').value;

    const novoPerfil = new Perfil(nome, profissao, imagemUrl);
    const htmlDoCartao = novoPerfil.gerarHTML();

    containerCartoes.insertAdjacentHTML('beforeend', htmlDoCartao);
    form.reset();
});

containerCartoes.addEventListener('click', (event) => {
    if (event.target.classList.contains('botao-remover')) {
        const cartaoParaRemover = event.target.closest('.cartao-perfil');
        if (cartaoParaRemover) {
            cartaoParaRemover.remove();
        }
    }
});