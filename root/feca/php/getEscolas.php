<?php
    // Dados de conexão com o banco de dados
    $servername = "localhost";
    $database = "feca_test";
    $username = "root";
    $password = "usbw";

    // Criar a conexão
    $conn = new mysqli($servername, $username, $password, $database);
        
    // Verificar a conexão
    if ($conn->connect_error) {
        die("Conexão falhou: " . $conn->connect_error);
    }

    //mano desculpa vou largar rapidão
    $sql = "select ";
    $cidade = $_POST['cidade'];
    
    switch ($cidade) {
        case 'Americana':

            break;
        case 'SBO':
            break;
        case 'Nova Odessa':
            break;

    }

    
/*  NÃO TA FUNCIONANDO
    $conn->close();



       // Verificar se os parâmetros 'query' e 'cidade' foram passados
       if (isset($_GET['query']) && isset($_GET['cidade'])) {
        $query = $_GET['query'];
        $cidade = $_GET['cidade'];

        // Buscar escolas no banco de dados que correspondem à cidade e ao nome (parcial)
        $sql = "SELECT nome FROM escolasvalidas WHERE cidade = ? AND nome LIKE ?";
        $stmt = $conn->prepare($sql);
        $search = "%" . $query . "%";  // Usar LIKE para buscar partes do nome
        $stmt->bind_param("ss", $cidade, $search);
        $stmt->execute();
        $result = $stmt->get_result();

        // Se houver resultados, retornar as sugestões
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                // Cada sugestão será uma opção clicável
                echo "<div onclick='selecionarEscola(\"" . $row['nome'] . "\")'>" . $row['nome'] . "</div>";
            }
        } else {
            echo "<div>Nenhuma escola encontrada</div>";
        }

        // Fechar a conexão
        $stmt->close();
    } */