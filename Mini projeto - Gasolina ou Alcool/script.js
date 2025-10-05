const inputAlcool = document.querySelector('#alcool');
const inputGasolina = document.querySelector('#gasolina');
const botaoCalcular = document.querySelector('#botao-calcular');
const areaResultado = document.querySelector('#resultado');

function calcular() {

    const precoAlcool = parseFloat(inputAlcool.value);
    const precoGasolina = parseFloat(inputGasolina.value);

    if (isNaN(precoAlcool) || isNaN(precoGasolina)) {
        alert("Por favor, digite valores válidos em ambos os campos.");
        return;
    }
    if (precoAlcool <= 0 || precoGasolina <= 0) {
        alert("Por favor, digite valores positivos maiores que zero.");
        return; 
    }
    
    const proporcao = precoAlcool / precoGasolina;

    areaResultado.classList.remove('resultado-verde', 'resultado-azul');
    
    if (proporcao <= 0.7) {
        areaResultado.textContent = "Compensa abastecer com Álcool.";
        areaResultado.classList.add('resultado-verde');
    } else {
        areaResultado.textContent = "Compensa abastecer com Gasolina.";
        areaResultado.classList.add('resultado-azul');
    }
}

botaoCalcular.addEventListener('click', calcular);