
//mostra ou esconde campo adicional na pagina de registro da banda
function addEscola() {
    var checkbox = document.getElementById("btnEscolaBanda");
    var extra = document.getElementById("extraBanda");

    if (checkbox.checked) {
        extra.style.display = "block";
    } else {
        extra.style.display = "none";
    }
}

// Viadagem no numero de telefone 
function formatarTelefone(input) {
    // remover caracters não numericos
    let valor = input.value.replace(/\D/g, '');

    // formatação (XX) XXXXX-XXXX
    valor = valor.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    
    input.value = valor; //atualiza campo de entrada 

}

// Garantir que o usuario receba a mensagem de erro
function checkCampos(){
    var nomeBanda = document.forms["bandaForm"]["nomeBanda"].value;
    var numInteg = document.forms["bandaForm"]["numInteg"].value;
    var telBanda = document.forms["bandaForm"]["telBanda"].value;
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
    if (telBanda === "" && emailBanda ==="") {
        mensagem += "Por favor, insira o número de telefone ou email.\n";
    }

    // Exibir mensagem se houver erros
    if (mensagem !== "") {
        alert(mensagem); // Exibe o que está faltando
        return false;    // Bloqueia o envio do formulário
    }
            
    return true; // Se não houver erros, permite o envio
}

