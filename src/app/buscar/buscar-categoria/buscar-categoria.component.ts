import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/model/Category';
import { Product } from 'src/app/model/Product';
import { CarrinhoService } from 'src/app/service/carrinho.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-buscar-categoria',
  templateUrl: './buscar-categoria.component.html',
  styleUrls: ['./buscar-categoria.component.css']
})
export class BuscarCategoriaComponent implements OnInit {

  nomeCategoria: string

  produto: Product = new Product()

  categoria: Category = new Category()
  listaCategoria: Category

  key: string
  reverse: boolean

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    this.route.params.subscribe(({ id }) => this.findByIdCategoria(id));
    let id= this.route.snapshot.params['id']
    this.findByIdCategoria(id)
  }
  
  findByIdCategoria(id: number){
    this.categoriaService.getByIdCategoria(id).subscribe((resp: Category) =>{
      this.listaCategoria= resp
      this.nomeCategoria = this.listaCategoria.name
    })
  }

  opcaoKey(event: any){
    let keyOp = event.target.value

    if(keyOp == 1 ){
      this.key = 'name'
      this.reverse =  false
    } else if(keyOp == 2){
        this.key = 'name'
        this.reverse =  true 
    } else if(keyOp == 3){
        this.key = 'price'
        this.reverse =  false
    } else if(keyOp == 4){
        this.key = 'price'
        this.reverse = true
    }     
  }

  getProdById(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Product) =>{
      this.produto = resp;
      this.addProduto()
    })
  }

  addProduto(){
    this.carrinhoService.addProduto(this.produto)
    console.log(this.carrinhoService.produtos)
  }

}
