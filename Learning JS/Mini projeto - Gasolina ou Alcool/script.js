// 1. Seleciona os elementos do HTML que serão manipulados.
const inputAlcool = document.querySelector('#alcool');
const inputGasolina = document.querySelector('#gasolina');
const botaoCalcular = document.querySelector('#botao-calcular');
const areaResultado = document.querySelector('#resultado');

// Função principal que é executada ao clicar no botão.
function calcular() {

    // 2. Obtém os valores dos inputs e os converte para números.
    const precoAlcool = parseFloat(inputAlcool.value);
    const precoGasolina = parseFloat(inputGasolina.value);

    // 3. Valida as entradas do usuário.
    if (isNaN(precoAlcool) || isNaN(precoGasolina)) {
        alert("Por favor, digite valores válidos em ambos os campos.");
        return;
    }
    // Verifica se os valores são positivos.
    if (precoAlcool <= 0 || precoGasolina <= 0) {
        alert("Por favor, digite valores positivos maiores que zero.");
        return; 
    }
    
    // 4. Calcula a proporção entre o preço do álcool e da gasolina.
    const proporcao = precoAlcool / precoGasolina;

    // Remove as classes de estilo da execução anterior para limpar o resultado.
    areaResultado.classList.remove('resultado-verde', 'resultado-azul');
    
    // 5. Compara a proporção e define a mensagem de resultado.
    if (proporcao <= 0.7) {
        // Se a proporção for <= 0.7, álcool é mais vantajoso.
        areaResultado.textContent = "Compensa abastecer com Álcool.";
        areaResultado.classList.add('resultado-verde');
    } else {
        // Caso contrário, gasolina é mais vantajosa.
        areaResultado.textContent = "Compensa abastecer com Gasolina.";
        areaResultado.classList.add('resultado-azul');
    }
}

// 6. Adiciona um evento de clique ('click') ao botão.
// Quando o botão é clicado, a função 'calcular' é chamada.
botaoCalcular.addEventListener('click', calcular);