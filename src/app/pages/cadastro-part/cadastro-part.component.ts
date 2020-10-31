import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Participante } from './../../participante';

@Component({
  selector: 'app-cadastro-part',
  templateUrl: './cadastro-part.component.html',
  styleUrls: ['./cadastro-part.component.css']
})

export class CadastroPartComponent implements OnInit {
  formularioDeParticipante: FormGroup; // nome do formulario

  // criar construtor
  constructor(private fb: FormBuilder){ }

  ngOnInit(): void {
    this.criarFormularioDeParticipante();
  }

  enviarDados(){
    const dadosFormulario = this.formularioDeParticipante.value;
    const participante = new Participante(

      dadosFormulario.nome,
      dadosFormulario.email,
      dadosFormulario.curso,
      dadosFormulario.motivacao
    );

    // criando mensagem de sucesso
    alert(`O participante ${participante.nome} foi cadastrado com sucesso. \n Dados: ${JSON.stringify(participante)}`);

    // se estiver tudo certo, ele retorna ao normal
    this.formularioDeParticipante.reset();


    //console.log(this.formularioDeParticipante.value);
  }

  criarFormularioDeParticipante(){

    // criação de formularios e validações
    this.formularioDeParticipante = this.fb.group({
      nome: [
        '',
        Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60)
        ])
      ],

      email: ['', Validators.compose([Validators.email, Validators.required])],

      curso: ['', Validators.compose([Validators.required])],

      motivacao: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(200)
        ])
      ]

    });

  } // fim do metodo

  // propriedades do formulario que vamos utilizar para obter erros
  get nome(){
    return this.formularioDeParticipante.get('nome');
  }

  get email(){
    return this.formularioDeParticipante.get('email');
  }

  get curso(){
    return this.formularioDeParticipante.get('curso');
  }

  get motivacao(){
    return this.formularioDeParticipante.get('motivacao');
  }


} // fim da classe
