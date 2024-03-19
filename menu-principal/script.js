// ABRIR CALCULADORAS
function abrirCalculadora(calculadora){
    // ESCONDER TODAS AS SEÇÕES DE CALCULADORA
    var calculadoras = document.querySelectorAll('section');
    calculadoras.forEach(function (calc) {
        calc.style.display = 'none';
    });

    //EXIBIR APENAS A SEÇÃO CALCULADORA SELECIONADA
    document.getElementById(calculadora).style.display = 'block';
}

// CALCULADORA BÁSICA


// CALCULADORA DE IMC
function calcularIMC() {

    // LIMPAR ALERTA
    document.getElementById("alerta").textContent = '';
    document.getElementById("resultado").textContent = '';

    // OBTENÇÃO DOS VALORES
    let peso = parseFloat(document.getElementById("pesoIMC").value);
    let altura = parseFloat(document.getElementById("alturaIMC").value);

    // VERIFICAÇÃO DOS VALORES
    if (!peso || !altura || peso <= 0 || altura <= 0){
        document.getElementById("alerta").textContent = 'Valores inválidos. Tente novamente.';
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
    document.getElementById("resultado").textContent = `Seu IMC é ${imc.toFixed(2)} e está classificado como ${classificacao}`;
}

// CALCULADORA DE COMBUSTÍVEL
function calcularCombustivel() {

    // LIMPAR ALERTA
    document.getElementById("alerta").textContent = '';
    document.getElementById("resultado").textContent = '';

    // OBTENÇÃO DOS VALORES
    let gasolinaPreco = parseFloat(document.getElementById("gasolinaPreco").value);
    let alcoolPreco = parseFloat(document.getElementById("alcoolPreco").value);
    let qtdGasolina = parseFloat(document.getElementById("qtdGasolina").value);
    let qtdAlcool = parseFloat(document.getElementById("qtdAlcool").value);

    // VERIFICAÇÃO DOS VALORES
    if (!gasolinaPreco || !alcoolPreco || !qtdAlcool || !qtdGasolina || gasolinaPreco <= 0 || alcoolPreco <= 0 || qtdAlcool <= 0 || qtdGasolina <= 0){
        document.getElementById("alerta").textContent = 'Valores inválidos. Tente novamente.';
        return;
    }

    // CALCULAR COMBUSTIVEL
    let calculoGas = gasolinaPreco * qtdGasolina;
    let calculoAlcool = alcoolPreco * qtdAlcool;

    // CALCULAR O MAIS ECONÔMICA
    let melhorOpcao = "";

    if (calculoGas < calculoAlcool){
        melhorOpcao = "O gás é a opção mais econômica."
    } else if (calculoGas > calculoAlcool){
        melhorOpcao = "O álcool é a opção mais econômica."
    } else{
        melhorOpcao = "Qualquer uma das opções";
    }

    // EXIBIR RESULTADO
    document.getElementById("contaGasolina").textContent = `Valor da gasolina: ${calculoGas}`;
    document.getElementById("contaAlcool").textContent = `Valor do álcool: ${calculoAlcool}`
    document.getElementById("resultado").textContent = `${melhorOpcao}`
}