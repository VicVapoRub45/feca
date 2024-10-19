// Garantir que o usuario receba a mensagem de erro
function checkCampos() {
    var nomeBanda = document.forms["bandaForm"]["nomeBanda"].value;
    var numInteg = document.forms["bandaForm"]["numInteg"].value;
    var telBanda = document.forms["bandaForm"]["telefone"].value;
    var emailBanda = document.forms["bandaForm"]["emailBanda"].value;

    var mensagem = "";

    // Verificar se o nome da banda foi preenchido 
    if (nomeBanda === "") {
        mensagem += "Por favor, insira um nome valido.\n";
    }

    // Verificar se o número de integrantes foi preenchido
    if (numInteg === "") {
        mensagem += "Por favor, insira o número de integrantes.\n";
    }

    // Verificar se o número de telefone ou de email foi preenchido
    if (telBanda === "" && emailBanda === "") {
        mensagem += "Por favor, insira o número de telefone ou email.\n";
    }

    // Verificar banda
    if (escolaSelect.value === "") {
        mensagem += "Por favor, selecione uma escola.\n";
    }

    // Exibir mensagem se houver erros
    if (mensagem !== "") {
        alert(mensagem); // Exibe o que está faltando
        return false; // Bloqueia o envio do formulário
    }

    return true; // Se não houver erros, permite o envio
}


//Obriga a pessoa a escolher uma escola
document.getElementById('bandaForm').addEventListener('submit', function(event) {
    const escolaBanda = document.getElementById('escolaBanda');
    const errorMessage = document.getElementById('error-message');

    // Verifica se o valor selecionado é vazio
    if (escolaBanda.value === "") {
        errorMessage.style.display = 'block'; // Exibe mensagem de erro
        event.preventDefault(); // Impede o envio do formulário
    } else {
        errorMessage.style.display = 'none'; // Esconde mensagem de erro
    }
});