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
        // Recuperar os dados do formulário
        $nomeBanda = strtoupper($_POST['nomeBanda']);
        $numInteg = $_POST['numInteg'];
        $telBanda = $_POST['telBanda'];
        $emailBanda = $_POST['emailBanda'];
        $escolaBanda = $_POST['escolaBanda'];

        // Verificar se já existe um registro com o mesmo nome da banda
        $checkSql = "SELECT * FROM banda WHERE nomeBanda = '$nomeBanda'";
        $result = mysqli_query($conn, $checkSql);

        if (mysqli_num_rows($result) > 0) {
            echo "Erro: A $nomeBanda já foi registrado, qualquer coisa entre em contato conosco atraves das redes sociais.";
        } else {
            // Criar a consulta SQL para inserção dos dados
            $sql = "INSERT INTO banda (nomeBanda, numeroDeIntegrantes, telBanda, emailBanda, escolaBanda) 
                    VALUES ('$nomeBanda', '$numInteg', '$telBanda', '$emailBanda', '$escolaBanda')";

            // Executar a consulta SQL
            if (mysqli_query($conn, $sql)) {
                echo "<script>alert('Registro inserido com sucesso!');</script>";
                echo "<script>
                        setTimeout(function() {
                            window.location.href = '../index.html';
                        }, 3000); // 3000 milissegundos = 3 segundos
                      </script>";
                exit();
            } else {
                echo "Erro: " . $sql . "<br>" . mysqli_error($conn);
            }
        }
    } else {
        echo "Insira todos os dados.";
    }

    // Fechar a conexão
    mysqli_close($conn);
?>
