const visor = document.getElementById('visor');

// Adiciona o caractere clicado ao visor
function adicionarCaractere(caractere) {
    visor.value += caractere;
}

// Limpa todo o visor
function limparVisor() {
    visor.value = '';
}

// Apaga apenas o último caractere digitado
function apagarUltimo() {
    visor.value = visor.value.slice(0, -1);
}

// Processa o cálculo direto da string
function calcularResultado() {
    try {
        let resultado = eval(visor.value);
        
        // Trata erros matemáticos comuns como divisão por zero
        if (resultado === Infinity || resultado === -Infinity) {
            visor.value = "Erro";
        } else {
            visor.value = resultado;
        }
    } catch (erro) {
        visor.value = 'Erro';
    }
}
