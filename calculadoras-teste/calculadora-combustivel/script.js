// FUNÇÃO PARA CALCULAR O COMBUSTÍVEL
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
