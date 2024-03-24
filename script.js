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
    document.getElementById("alerta_divisao").style.display = 'none';
}


// ABRIR CALCULADORAS
function abrirCalculadora(calculadora){
    // ESCONDER O MENU
    document.getElementById("menuPrincipal").style.display='none';
    // ESCONDER TODAS AS SEÇÕES DE CALCULADORA
    let calculadoras = document.querySelectorAll('section');
    calculadoras.forEach(function (calc) { 
        calc.style.display = 'none';
    });

    //EXIBIR APENAS A SEÇÃO DA CALCULADORA SELECIONADA
    document.getElementById(calculadora).style.display = 'block';   
}

// CALCULADORA BÁSICA

// LIMPAR ALERTA
document.getElementById("alerta_divisao").textContent = '';

// VARIÁVEIS PARA OS ELEMENTOS DO DISPLAY E BUTTON
let display = document.querySelector('.display'); // CONSTANTE 'display' RECEBE UM RESULTADO ENCONTRADO NO HTML
let buttons = document.querySelectorAll('button');  // CONSTANTE 'button' RECEBE TODOS OS ELEMENTOS BUTTON

// FUNÇÃO DE PORCENTAGEM
function calcularPorcentagem(number){
    return number / 100;
}

// LOOP QUE ITERA CADA ELEMENTO DA LISTA 'buttons'
buttons.forEach(button => { 
    button.addEventListener('click', function () { // ADICIONA O EVENTO DE CLIQUE
        let value = button.getAttribute('data-value'); // OBTEM O VALOR DO ATRIBUTO DO BOTÃO CLICADO

        if (value === 'AC') { 
            display.value = '';  // LIMPAR TUDO
        } else if (value === 'DEL') {
            display.value = display.value.slice(0, -1); // EXCLUI O ÚLTIMO CARACTERE
        } else if (value === '=') {
            try {
                if (display.value.includes('%')){  // SE USAR O ELEMENTO % = CALCULE PORCENTAGEM
                    const number = parseFloat(display.value.replace('%', ''));
                    display.value = calcularPorcentagem(number);
                } else{
                    let result = eval(display.value);
                    if (result === Infinity || result === -Infinity) { // VERIFICA SE O RESULTADO É INFINITO
                        document.getElementById("alerta_divisao").style.display = 'block';
                        document.getElementById("alerta_divisao").textContent = 'Erro: divisão por zero. Tente novamente.'
                        display.value = '';
                        
                        // FUNÇÃO DE TEMPO DE TELA DO ALERTA:
                        setTimeout(function() {
                            document.getElementById("alerta_divisao").style.display = 'none';
                        }, 1000);
                        
                    } else {
                        display.value = result;
                    } 
                }
            } catch (error) {
                display.value = 'Erro';
            }
        } else if (value === null){
            display.value = ''; // INICIALIZA COM DISPLAY VAZIO
        } else {
            display.value += value;  // PEGA O VALOR ATUAL DO DISPLAY DA CALCULADORA E CONCATENA O VALOR DO BOTÃO CLICADO A ELE (ADICIONA O VALOR DO BOTÃO CLICADO AO FINAL DO VALOR ATUAL DO VISOR)
        }
    });
});

// CALCULADORA DE COMBUSTÍVEL
function calcularCombustivel() {

    // LIMPA OS ALERTAS
    document.getElementById("alerta_combustivel").textContent = '';
    document.getElementById("resultado_combustivel").textContent = '';
    document.getElementById("contaGasolina").textContent = '';
    document.getElementById("contaAlcool").textContent = '';

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

    // LIMPAR OS ALERTAS
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