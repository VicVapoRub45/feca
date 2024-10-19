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
    $nomeBanda = strtoupper(trim($_POST['nomeBanda']));
    $numInteg = (int)$_POST['numInteg']; // Garantindo que é um inteiro
    $telBanda = trim($_POST['telefone']); // Ajustado para acessar o id correto
    $emailBanda = trim($_POST['emailBanda']);
    $escolaBanda = trim($_POST['escolaBanda']);

    // Verificar se já existe um registro com o mesmo nome da banda
    $checkSql = "SELECT * FROM banda WHERE nomeBanda = ?";
    $stmt = mysqli_prepare($conn, $checkSql);
    mysqli_stmt_bind_param($stmt, "s", $nomeBanda);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    if (mysqli_num_rows($result) > 0) {
        echo "Erro: A banda '$nomeBanda' já foi registrada. Qualquer coisa, entre em contato conosco através das redes sociais.";
    } else {
        // Criar a consulta SQL para inserção dos dados
        $sql = "INSERT INTO banda (nomeBanda, numeroDeIntegrantes, telBanda, emailBanda, escolaBanda) 
                VALUES (?, ?, ?, ?, ?)";
        $stmt = mysqli_prepare($conn, $sql);
        mysqli_stmt_bind_param($stmt, "sisss", $nomeBanda, $numInteg, $telBanda, $emailBanda, $escolaBanda);

        // Executar a consulta SQL
        if (mysqli_stmt_execute($stmt)) {
            echo "<script>alert('Registro inserido com sucesso! Entraremos em contato');</script>";
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
} else {
    echo "Insira todos os dados.";
}

// Fechar a conexão
mysqli_close($conn);
?>
