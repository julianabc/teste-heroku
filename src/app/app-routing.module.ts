import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroPartComponent } from './pages/cadastro-part/cadastro-part.component';
import { CadastroProjComponent } from './pages/cadastro-proj/cadastro-proj.component';



const routes: Routes = [
  {path : 'participantes', component : CadastroPartComponent},
  {path : 'projetos', component : CadastroProjComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
