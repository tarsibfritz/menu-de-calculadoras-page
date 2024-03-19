// ABRIR MENU PRINCIPAL
function abrirMenuPrincipal(){
    // EXIBIR APENAS O CABEÇALHO E O MENU PRINCIPAL
    document.querySelector('.title').style.display= 'block';
    document.querySelector('.cabecalho').style.display = 'block';
    document.querySelector('#menuPrincipal').style.display = 'block';
    // ESCONDER SEÇÕES
    document.getElementById("calculadoraBasica").style.display = 'none';
    document.getElementById("calculadoraCombustivel").style.display = 'none';
    document.getElementById("calculadoraIMC").style.display = 'none';
}


// ABRIR CALCULADORAS
function abrirCalculadora(calculadora){
    // ESCONDER O MENU
    document.getElementById("menuPrincipal").style.display='none';
    // ESCONDER TODAS AS SEÇÕES DE CALCULADORA
    var calculadoras = document.querySelectorAll('section');
    calculadoras.forEach(function (calc) {
        calc.style.display = 'none';
    });

    //EXIBIR APENAS A SEÇÃO DA CALCULADORA SELECIONADA
    document.getElementById(calculadora).style.display = 'block';
    
}

// CALCULADORA BÁSICA
function calculadoraPadrao() {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.buttons button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = button.getAttribute('data-value');

            if (value === 'AC') {
                display.value = '';
            } else if (value === 'DEL') {
                display.value = display.value.slice(0, -1);
            } else if (value === '=') {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Erro';
                }
            } else {
                display.value += value;
            }
        });
    });
};

// CALCULADORA DE COMBUSTÍVEL
function calcularCombustivel() {

    // LIMPAR ALERTA
    document.getElementById("alerta_combustivel").textContent = '';
    document.getElementById("resultado_combustivel").textContent = '';

    // OBTENÇÃO DOS VALORES
    let gasolinaPreco = parseFloat(document.getElementById("gasolinaPreco").value);
    let alcoolPreco = parseFloat(document.getElementById("alcoolPreco").value);
    let qtdGasolina = parseFloat(document.getElementById("qtdGasolina").value);
    let qtdAlcool = parseFloat(document.getElementById("qtdAlcool").value);

    // VERIFICAÇÃO DOS VALORES
    if (!gasolinaPreco || !alcoolPreco || !qtdAlcool || !qtdGasolina || gasolinaPreco <= 0 || alcoolPreco <= 0 || qtdAlcool <= 0 || qtdGasolina <= 0){
        document.getElementById("alerta_combustivel").textContent = 'Valores inválidos. Tente novamente.';
        return;
    }

    // CALCULAR COMBUSTIVEL
    let calculoGas = gasolinaPreco * qtdGasolina;
    let calculoAlcool = alcoolPreco * qtdAlcool;

    // CALCULAR O MAIS ECONÔMICA
    let melhorOpcao = "";

    if (calculoGas < calculoAlcool){
        melhorOpcao = "A gasolina é a opção mais econômica."
    } else if (calculoGas > calculoAlcool){
        melhorOpcao = "O álcool é a opção mais econômica."
    } else{
        melhorOpcao = "Ambos possuem o mesmo preço.";
    }

    // EXIBIR RESULTADO
    document.getElementById("contaGasolina").textContent = `Valor da gasolina: ${calculoGas}`;
    document.getElementById("contaAlcool").textContent = `Valor do álcool: ${calculoAlcool}`
    document.getElementById("resultado_combustivel").textContent = `${melhorOpcao}`
}

// CALCULADORA DE IMC
function calcularIMC() {

    // LIMPAR ALERTA
    document.getElementById("alerta_imc").textContent = '';
    document.getElementById("resultado_imc").textContent = '';

    // OBTENÇÃO DOS VALORES
    let peso = parseFloat(document.getElementById("pesoIMC").value);
    let altura = parseFloat(document.getElementById("alturaIMC").value);

    // VERIFICAÇÃO DOS VALORES
    if (!peso || !altura || peso <= 0 || altura <= 0){
        document.getElementById("alerta_imc").textContent = 'Valores inválidos. Tente novamente.';
        return;
    }

    // CALCULAR IMC
    let imc = peso / (altura * altura);

    // CLASSIFICAÇÃO DO IMC
    let classificacao = ""; 
    if (imc < 18.5){
        classificacao = "Abaixo do Peso";
    } else if (imc < 29.9){
        classificacao = "Excesso de Peso";
    } else if (imc < 34.9){
        classificacao = "Obesidade Classe I";
    } else if (imc < 39.9){
        classificacao = "Obesidade Classe II";
    } else {
        classificacao = "Obesidade Mórbida";
    }

    // EXIBIR RESULTADO E CLASSIFICAÇÃO
    document.getElementById("resultado_imc").textContent = `Seu IMC é ${imc.toFixed(2)} e está classificado como ${classificacao}`;
}

// RESOLVE O PROBLEMA DA ATUALIZAÇÃO DE PÁGINA
window.onload = function() {
    abrirMenuPrincipal();
};