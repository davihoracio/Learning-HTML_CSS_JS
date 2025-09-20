const inputAltura = document.querySelector('#js-altura');
const inputPeso = document.querySelector('#js-peso');
const areaResultado = document.querySelector('#js-resultado');
const botaoCalcular = document.querySelector('#js-botao_calcular');

function calcular() {
    let altura = parseFloat(inputAltura.value);
    const peso = parseFloat(inputPeso.value);
    
    if (isNaN(altura) || isNaN(peso)) {
        alert("Por favor, digite números válidos.");
        return;
    }

    if (altura <= 0 || peso <= 0) {
        alert("Por favor, digite valores maiores que zero.");
        return;
    }

    if (altura > 3) {
        altura = altura / 100;
    }
    
    const imc = peso / (altura * altura);

    areaResultado.className = 'resultado_verde';

    let classificacao = '';

    if (imc < 18.5) {
        classificacao = '(Abaixo do peso)';
    } else if (imc < 25) {
        classificacao = '(Peso normal)';
    } else if (imc < 30) {
        classificacao = '(Sobrepeso)';
    } else if (imc < 35) {
        classificacao = '(Obesidade Grau I)';
    } else if (imc < 40) {
        classificacao = '(Obesidade Grau II)';
    } else {
        classificacao = '(Obesidade Grau III)';
    }

    areaResultado.textContent = `Seu IMC é ${imc.toFixed(2)} ${classificacao}`;
}

botaoCalcular.addEventListener('click', calcular);