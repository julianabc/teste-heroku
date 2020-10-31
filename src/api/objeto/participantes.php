<?php

class Participantes{
  // declarar os atributos
  public $id, $nome, $email, $curso, $motivacao, $status;

  // criando o construtor
  function __construct($id, $nome, $email, $curso, $motivacao, $status){

    $this->id = $id;
    $this->nome = $nome;
    $this->email = $email;
    $this->curso = $curso;
    $this->motivacao = $motivacao;
    $this->status = $status;

  }






} // fim da classe



?>
