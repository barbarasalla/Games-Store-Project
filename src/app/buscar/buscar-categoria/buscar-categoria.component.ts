import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/model/Category';
import { Product } from 'src/app/model/Product';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-buscar-categoria',
  templateUrl: './buscar-categoria.component.html',
  styleUrls: ['./buscar-categoria.component.css']
})
export class BuscarCategoriaComponent implements OnInit {

  produto: Product = new Product()
  listaProdutos: Product[]
  nomeProduto: string

  categoria: Category = new Category()

  key: string
  reverse: boolean

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    
    let id= this.route.snapshot.params['id']
    this.findByIdCategoria(id)
    this.findAllProdutos()
  }

  findAllProdutos(){
    return this.produtoService.getAllProduto().subscribe((resp: Product[])=>{
      this.listaProdutos = resp
      let id= this.route.snapshot.params['id']
      this.findByIdCategoria(id)
    })
  }
  
  findByIdCategoria(id: number){
    this.categoriaService.getByIdCategoria(id).subscribe((resp: Category) =>{
      this.categoria= resp
      this.findAllProdutos()
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

}
