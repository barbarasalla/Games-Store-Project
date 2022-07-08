import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { AlertasComponent } from './alertas/alertas.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { EditCategoriaComponent } from './edit/edit-categoria/edit-categoria.component';
import { DeleteCategoriaComponent } from './delete/delete-categoria/delete-categoria.component';
import { ProdutoComponent } from './produto/produto.component';
import { BuscarProdutosComponent } from './buscar/buscar-produtos/buscar-produtos.component';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    InicioComponent,
    AlertasComponent,
    EntrarComponent,
    CadastrarComponent,
    CategoriaComponent,
    EditCategoriaComponent,
    DeleteCategoriaComponent,
    ProdutoComponent,
    BuscarProdutosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy    
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
