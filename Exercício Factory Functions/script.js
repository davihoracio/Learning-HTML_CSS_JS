function criaCalculadora(){
    return{
        display: document.querySelector('.display'),
        botaoClear: document.querySelector('.botao_clear'),

        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        clearDisplay(){
            this.display.value = ''
        },

        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta)

                if(!conta){
                    alert('Conta inválida');
                    return;
                }
                this.display.value = conta
            } catch(e){
                alert('Conta inválida');
                return;
            }
        },

        apagarUm(){
            this.display.value = this.display.value.slice(0, -1);
        },

        cliqueBotoes(){
            document.addEventListener('click', (e) => {
                const el = e.target;

                if(el.classList.contains('botao_num')){
                    this.botaoParaDisplay(el.innerText);
                }

                if(el.classList.contains('botao_clear')){
                    this.clearDisplay();
                }
                if(el.classList.contains('botao_del')){
                    this.apagarUm();
                }
                if(el.classList.contains('botao_igual')){
                    this.realizaConta();
                }
            });
        },

        botaoParaDisplay(valor){
            this.display.value += valor;
        },
        
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();