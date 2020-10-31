<?php

class Connection{

    // dados do banco de dados
    private $host = "localhost";
    private $db_name = "solidarizesw";
    private $username = "root";
    private $password = "";
    public $conn;

    // realizar a conexão
    public function getConnection(){

        $this->conn = null;

        try{
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf8");
        }catch(PDOException $exception){
            echo "Connection error: " . $exception->getMessage();
        }

        return $this->conn;
    }
}
?>
