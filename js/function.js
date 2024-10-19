//mobile
function mobileMenu(menu) {
    menu.classList.toggle('open');
}


const telefoneInput = document.getElementById('telefone');
const errorMessageTelefone = document.getElementById('error-message-telefone');
const escolaSelect = document.getElementById('escolaBanda');
const errorMessageEscola = document.getElementById('error-message-escola');

// Função para aplicar a máscara de telefone
telefoneInput.addEventListener('input', function() {
    let inputValue = this.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (inputValue.length > 0) {
        inputValue = '(' + inputValue;
    }
    if (inputValue.length > 3) {
        inputValue = inputValue.slice(0, 3) + ') ' + inputValue.slice(3);
    }
    if (inputValue.length > 9) {
        inputValue = inputValue.slice(0, 9) + '-' + inputValue.slice(9);
    }
    if (inputValue.length > 15) {
        inputValue = inputValue.slice(0, 15); // Limita o número de caracteres
    }

    this.value = inputValue;

    // Remover mensagem de erro se o campo for esvaziado
    if (this.value === "") {
        errorMessageTelefone.style.display = 'none';
        telefoneInput.classList.remove('invalid');
    }
});

// Função para validar o número de telefone
telefoneInput.addEventListener('blur', function() {
    const regexTelefone = /^\(\d{2}\) \d{4}-\d{4}$/; // Regex para formato (xx) xxxx-xxxx
    if (this.value === "") {
        errorMessageTelefone.style.display = 'none'; // Remove a mensagem de erro se o campo estiver vazio
        telefoneInput.classList.remove('invalid');
    } else if (!regexTelefone.test(this.value)) {
        errorMessageTelefone.style.display = 'block'; // Exibe a mensagem de erro se o formato for inválido
        telefoneInput.classList.add('invalid');
    } else {
        errorMessageTelefone.style.display = 'none'; // Remove a mensagem se o formato estiver correto
        telefoneInput.classList.remove('invalid');
    }
});

// Garantir que o usuário receba a mensagem de erro
function checkCampos() {
    var nomeBanda = document.forms["bandaForm"]["nomeBanda"].value;
    var numInteg = document.forms["bandaForm"]["numInteg"].value;
    var telBanda = telefoneInput.value;
    var emailBanda = document.forms["bandaForm"]["emailBanda"].value;
    var escolaBanda = escolaSelect.value;

    var mensagem = "";

    // Verificar se o nome da banda foi preenchido
    if (nomeBanda.trim() === "") {
        mensagem += "Por favor, insira um nome válido.\n";
    }

    // Verificar se o número de integrantes foi preenchido corretamente
    if (numInteg === "" || parseInt(numInteg) <= 0) {
        mensagem += "Por favor, insira um número válido de integrantes.\n";
    }

    // Verificar se o número de telefone ou de email foi preenchido
    if (telBanda === "" && emailBanda === "") {
        mensagem += "Por favor, insira o número de telefone ou email.\n";
    }

    // Verificar se uma escola foi selecionada
    if (escolaBanda === "") {
        mensagem += "Por favor, selecione uma escola.\n";
    }

    // Exibir mensagem se houver erros
    if (mensagem !== "") {
        alert(mensagem); // Exibe o que está faltando
        return false; // Bloqueia o envio do formulário
    }

    return true; // Se não houver erros, permite o envio
}