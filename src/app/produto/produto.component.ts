import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../model/Category';
import { Product } from '../model/Product';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto: Product = new Product()
  nomeProduto: string
  listaProdutos: Product[]
  idProduto: number

  categoria: Category = new Category()
  listaCategorias: Category[]
  categoriaId: number

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private alerta: AlertasService,
    private router: Router
  ) { }
  ngOnInit(){
    this.produtoService.refreshToken()
    this.findAllCategoria()
    this.findAllProdutos()
  }

  findAllProdutos(){
    this.produtoService.getAllProduto().subscribe((resp: Product[])=>{
      this.listaProdutos = resp
    })
  }

  findByNomeProduto(){
    if(this.nomeProduto == ''){
      this.findAllProdutos()
    } else{
      this.produtoService.getByNomeProduto(this.nomeProduto).subscribe((resp: Product[])=>{
        this.listaProdutos= resp
      })
    }    
  }

  cadastrarProduto(){
    this.categoria.id=this.categoriaId
    this.produto.category=this.categoria

    this.produtoService.postProduct(this.produto).subscribe((resp: Product)=>{
      this.produto=resp
      this.alerta.showAlertSuccess('Produto cadastrado com sucesso!')
      this.findAllProdutos()
    })

  }

  findByIdCategorias(){
    this.categoriaService.getByIdCategoria(this.categoriaId).subscribe((resp: Category)=>{
      this.categoria = resp
    })
  }

  findAllCategoria(){
    return this.categoriaService.getAllCategoria().subscribe((resp: Category[])=>{
      this.listaCategorias = resp
    })
  }


  cadastrarCategoria(){
    this.categoriaService.refreshToken()
    if(this.categoria.name == null){
      return this.alerta.showAlertInfo("Você precisa adicionar o nome da categoria.")
    } else{
        this.categoriaService.postCategoria(this.categoria).subscribe((resp: Category) =>{
        this.categoria=resp
        this.alerta.showAlertSuccess("Categoria cadastrada com sucesso!")
        this.categoria = new Category()
        this.findAllCategoria()
      })
    }   
  }

  findByIdProduto(){
    this.produtoService.getByIdProduto(this.idProduto).subscribe((resp: Product)=>{
      this.produto = resp
    })
  }

  findId(id: number){
    this.idProduto = id
    console.log(this.idProduto)
    this.findByIdProduto()
  }

  deletarProduto(){
    this.produtoService.refreshToken()
    this.produtoService.deleteProduct(this.idProduto).subscribe(()=>{
      this.alerta.showAlertSuccess('Produto removido com sucesso!')
      this.findAllProdutos()
    })
  }

  atualizarProduto(){
    this.categoria.id=this.categoriaId
    this.produto.category=this.categoria

    this.produtoService.putProduct(this.produto).subscribe((resp: Product)=>{
      this.produto=resp
      this.alerta.showAlertSuccess('Produto atualizado com sucesso!')
      this.findAllProdutos()
    })

  }

}
