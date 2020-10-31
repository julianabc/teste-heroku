export class Participante{
  nome: string;
  email: string;
  curso: string;
  motivacao: string;

  constructor(nome: string, email: string, curso: string, motivacao: string){
    this.nome = nome;
    this.email = email;
    this.curso = curso;
    this.motivacao = motivacao;
  } // fim do construtor

} // fim da classe
