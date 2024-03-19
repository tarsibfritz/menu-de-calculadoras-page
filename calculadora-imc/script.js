// FUNÇÃO PARA CALCULAR O IMC
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