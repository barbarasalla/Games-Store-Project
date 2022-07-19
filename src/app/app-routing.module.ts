import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarCategoriaComponent } from './buscar/buscar-categoria/buscar-categoria.component';
import { BuscarConsoleComponent } from './buscar/buscar-console/buscar-console.component';
import { BuscarProdutosComponent } from './buscar/buscar-produtos/buscar-produtos.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { DeleteCategoriaComponent } from './delete/delete-categoria/delete-categoria.component';
import { EditCategoriaComponent } from './edit/edit-categoria/edit-categoria.component';
import { EntrarComponent } from './entrar/entrar.component';

import { InicioComponent } from './inicio/inicio.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [
{path: '', redirectTo: 'inicio', pathMatch:'full'},
{path: 'inicio', component: InicioComponent},
{path: 'entrar', component: EntrarComponent},
{path: 'cadastrar', component: CadastrarComponent},
{path: 'categoria', component: CategoriaComponent},
{path: 'edit-categoria/:id', component: EditCategoriaComponent},
{path: 'delete-categoria/:id', component: DeleteCategoriaComponent},
{path: 'produto', component: ProdutoComponent},
{path: 'buscar-produtos', component: BuscarProdutosComponent},
{path: 'buscar-categoria/:id', component: BuscarCategoriaComponent},
{path: 'carrinho', component: CarrinhoComponent},
{path: 'produto-detalhe/:id', component: ProdutoDetalheComponent},
{path: 'buscar-console/:id', component: BuscarConsoleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
