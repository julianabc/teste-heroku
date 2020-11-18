import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroProjComponent } from './pages/cadastro-proj/cadastro-proj.component';
import { CadastroPartComponent } from './pages/cadastro-part/cadastro-part.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CadastroCarroComponent } from './pages/cadastro-carro/cadastro-carro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CadastroProjComponent,
    CadastroPartComponent,
    MenuComponent,
    CadastroCarroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
