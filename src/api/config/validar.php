<?php

if (isset($_POST['submit'])) {

  include 'connection.php';

  //pegar os dados nos campos
  $nome = $_POST['nome-volunt'];
  $email = $_POST['email-volunt'];
  $curso = $_POST['curso-volunt'];
  $motivacao = $_POST['caixatxt-volunt'];

  // verificar se os campos não estão vazios
  if ($nome != '' && $email != '' && $curso != '' && $motivacao != '') {
    // depois fazer uma verificação de email aqui
    echo 'dados recebidos';

  }else{
    echo 'campos vazios';

  } // fim do if

  // a passagem para o banco de dados vem depois, talvez seja necesário passar para poo primeiro.

  // LEMBRETE: importante que o valor estático do status seja "em analise" tanto para o participante quanto para os projetos


}


?>
