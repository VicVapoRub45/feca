//mobile
function mobileMenu(menu) {
    menu.classList.toggle('open');
}

const rgInput = document.getElementById('rgInput');
const cpfInput = document.getElementById('cpfInput');

// Função senha
function checkCampos(){
    var senha1 = document.forms["convForm"]["senha1"].value;
    var senha2 = document.forms["convForm"]["senha2"].value;

    var mensagem = "";

    if (senha1 != senha2){
        mensagem +="As senhas devem ser iguais";
    };
    if (senha1.trim() === ""){
        mensagem +="Por favor insira uma senha";
    };
    if (senha2.trim() === "") {
        mensagem += "Por favor confirme a senha";
    };
    if (mensagem !== "") {
        alert(mensagem); // Exibe o que está faltando
        return false; // Bloqueia o envio do formulário
    }

}


// Função para exibir ou esconder o select da escola
function addEscola() {
    var checkbox = document.getElementById("btnEscolaConvidado");
    var extra = document.getElementById("extra");

    extra.style.display = checkbox.checked ? "block" : "none"; // Usa operador ternário para simplificar
}

// Função para alternar entre campos de RG e CPF com base na escolha
function toggleDocumentFields() {
    var docConvidado = document.getElementById("docConvidado").value;
    var extraRG = document.getElementById("extraRG");
    var extraCPF = document.getElementById("extraCPF");

    // Exibe o campo correspondente ao documento selecionado
    if (docConvidado === "rg") {
        extraRG.style.display = "block";
        extraCPF.style.display = "none";
    } else if (docConvidado === "cpf") {
        extraRG.style.display = "none";
        extraCPF.style.display = "block";
    } else {
        extraRG.style.display = "none";
        extraCPF.style.display = "none";
    }
}

rgInput.addEventListener('input', function() {
    let inputValue = this.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (inputValue.length > 2) {
        inputValue = inputValue.slice(0, 2) + '.' + inputValue.slice(2);
    }
    if (inputValue.length > 6) {
        1212
        inputValue = inputValue.slice(0, 6) + '.' + inputValue.slice(6);
    }
    if (inputValue.length > 10) {
        inputValue = inputValue.slice(0, 10) + '-' + inputValue.slice(10);
    }
    if (inputValue.length > 12) {
        inputValue = inputValue.slice(0, 12);
    }

    this.value = inputValue;

    // Remover mensagem de erro se o campo for esvaziado
    if (this.value === "") {
        errorMessageRG.style.display = 'none';
        rgInput.classList.remove('invalid');
    }
});

cpfInput.addEventListener('input', function() {
    let inputValue = this.value.replace(/\D/g, '');

    if (inputValue.length > 3) {
        inputValue = inputValue.slice(0, 3) + '.' + inputValue.slice(3);
    }
    if (inputValue.length > 7) {
        inputValue = inputValue.slice(0, 7) + '.' + inputValue.slice(7);
    }
    if (inputValue.length > 11) {
        inputValue = inputValue.slice(0, 11) + '-' + inputValue.slice(11);
    }
    if (inputValue.length > 14) {
        inputValue = inputValue.slice(0, 14);
    }
    this.value = inputValue;

    // Remover mensagem de erro se o campo for esvaziado
    if (this.value === "") {
        errorMessageCPF.style.display = 'none';
        rgInput.classList.remove('invalid');
    }
});