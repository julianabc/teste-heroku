import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Projeto } from '../../projeto';

@Component({
  selector: 'app-cadastro-proj',
  templateUrl: './cadastro-proj.component.html',
  styleUrls: ['./cadastro-proj.component.css']
})

export class CadastroProjComponent implements OnInit {
  formularioDeProjeto: FormGroup; // nome do formulario

  // criar construtor
  constructor(private fb: FormBuilder){ }

  ngOnInit(): void {
    this.criarFormularioDeProjeto();
  }

  enviarDados(){
    const dadosFormulario = this.formularioDeProjeto.value;
    const projeto = new Projeto(
      dadosFormulario.nome,
      dadosFormulario.email,
      dadosFormulario.descricao
    );

    // criando mensagem de erro


    alert(`O projeto ${projeto.nome} foi cadastrado com sucesso. \n Dados: ${JSON.stringify(projeto)}`);

    // se estiver tudo certo, ele retorna ao normal
    this.formularioDeProjeto.reset();


    //console.log(this.formularioDeProjeto.value);
  }

  criarFormularioDeProjeto(){

    // criação de formularios e validações
    this.formularioDeProjeto = this.fb.group({
      nome: [
        '',
        Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60)
        ])
      ],

      email: ['', Validators.compose([Validators.email, Validators.required])],
      descricao: [
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
    return this.formularioDeProjeto.get('nome');
  }

  get email(){
    return this.formularioDeProjeto.get('email');
  }

  get descricao(){
    return this.formularioDeProjeto.get('descricao');
  }

} // fim da classe
