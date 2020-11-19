export class Participante{
  nome: string;
  email: string;
  curso: string;
  motivacao: string;
  status: string;

  constructor(nome: string, email: string, curso: string, motivacao: string, status: string){
    this.nome = nome;
    this.email = email;
    this.curso = curso;
    this.motivacao = motivacao;
    this.status = status;
  } // fim do construtor

} // fim da classe
