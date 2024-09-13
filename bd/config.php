<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$dbhost = 'localhost'; // Verifique o nome do host
$dbUsername = 'root';  // Verifique o nome de usuário
$dbPassword = '33327236';      // Verifique a senha
$dbName = 'samuraiidle'; // Verifique o nome do banco de dados

$conexao = new mysqli($dbhost, $dbUsername, $dbPassword, $dbName);

if ($conexao->connect_error) {
    die("Erro na conexão: " . $conexao->connect_error);
} else {
    echo "Conexão bem-sucedida!";
}

// Obtendo o valor enviado via POST
//$valor = $_POST['valor'];

// Preparando e executando a inserção no banco de dados
//$result = mysqli_query($conexao, "INSERT INTO contagemitem('item') VALUES ($item)");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Captura o valor enviado
    $valor = $_POST['valor'];

    // Conexão ao banco de dados
    $conexao = new mysqli($dbhost, $dbUsername, $dbPassword, $dbName);

    // Verifica a conexão
    if ($conn->connect_error) {
        die("Falha na conexão: " . $conexao->connect_error);
    }

    $stmt = $conexao->prepare("INSERT INTO contagemitem (item) VALUES (?)");

    // Supondo que $valor contenha o valor a ser inserido, ele deve ser do tipo BIGINT (um número inteiro grande)
    $stmt->bind_param("i", $item);

    // Executa a consulta
    if ($stmt->execute()) {
        echo "Valor inserido com sucesso!";
    } else {
        echo "Erro ao inserir o valor: " . $stmt->error;
    }
    

   

    // Fecha a conexão
    $stmt->close();
    $conexao->close();
}
?>

?>
