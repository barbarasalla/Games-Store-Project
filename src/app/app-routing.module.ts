import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { DeleteCategoriaComponent } from './delete/delete-categoria/delete-categoria.component';
import { EditCategoriaComponent } from './edit/edit-categoria/edit-categoria.component';
import { EntrarComponent } from './entrar/entrar.component';

import { InicioComponent } from './inicio/inicio.component';
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [
{path: '', redirectTo: 'inicio', pathMatch:'full'},
{path: 'inicio', component: InicioComponent},
{path: 'entrar', component: EntrarComponent},
{path: 'cadastrar', component: CadastrarComponent},
{path: 'categoria', component: CategoriaComponent},
{path: 'edit-categoria/:id', component: EditCategoriaComponent},
{path: 'delete-categoria/:id', component: DeleteCategoriaComponent},
{path: 'produto', component: ProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
