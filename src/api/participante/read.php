<?php
// arquivo para saber quem pode ler os arquivos e ter o retorno em json

// required headers
header("Access-Control-Allow-Origin: *"); // asteriscos significa que qualquer um pode acessar
header("Content-Type: application/json; charset=UTF-8");



// a conexão ao banco de dados será aqui

// incluindo o banco de as classes
include_once '../config/connection.php';
include_once '../objects/partcipante.php';

// instanciando o banco e o participante
$database = new Connection();
$db = $database->getConnection();

// iniciando o participante
$product = new Participante($db);

// a leitura dos produtos logo abaixo







?>
