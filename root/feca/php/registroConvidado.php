<?php 
// Dados de conexão com o banco de dados
$servername = "localhost";
$database = "feca_test";
$username = "root";
$password = "usbw";

// Criação da conexão
$conn = mysqli_connect($servername, $username, $password, $database);

// Verificar conexão
if (!$conn) {
    die("Falha na conexão: " . mysqli_connect_error());
}

// Verificar se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recuperar os dados do formulário e validar
    $nomeConv = strtoupper(trim($_POST['nomeConvidado']));
    $senha = $_POST['senhaConvidado'];
    $escolaConv = isset($_POST['escolaConv']) ? trim($_POST['escolaConv']) : null;
    $cpf = isset($_POST['CPFConvidado']) ? trim($_POST['CPFConvidado']) : null;
    $rg = isset($_POST['RGCovidado']) ? trim($_POST['RGCovidado']) : null;

    // Verificar se CPF ou RG foi preenchido
    if (empty($cpf) && empty($rg)) {
        echo "<script>alert('Por favor, preencha CPF ou RG.');</script>";
        exit();
    }
    
    // Validate CPF format
if ($cpf && !preg_match("/^\d{3}\.\d{3}\.\d{3}-\d{2}$/", $cpf)) {
    echo "<script>alert('Formato de CPF inválido!');</script>";
    exit();
}

// Validate RG format
if ($rg && !preg_match("/^\d{2}\.\d{3}\.\d{3}-\w$/", $rg)) {
    echo "<script>alert('Formato de RG inválido!');</script>";
    exit();
}

    // Cria um hash seguro da senha (usar VARCHAR(255) no banco para senha)
    $senhaHash = password_hash($senha, PASSWORD_DEFAULT);

    // Criar a consulta SQL para inserção dos dados
    $sql = "INSERT INTO convidados (nome, senha, escolaConvidado, cpf, rg) 
            VALUES (?, ?, ?, ?, ?)";
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "sssss", $nomeConv, $senhaHash, $escolaConv, $cpf, $rg);

    // Executar a consulta SQL
    if (mysqli_stmt_execute($stmt)) {
        echo "<script>alert('Registro inserido com sucesso!');</script>";
        echo "<script>
                setTimeout(function() {
                    window.location.href = '../index.html';
                }, 3000); // 3000 milissegundos = 3 segundos
              </script>";
        exit();
    } else {
        echo "Erro: " . mysqli_error($conn);
    }
}

// Fechar a conexão
mysqli_close($conn);
