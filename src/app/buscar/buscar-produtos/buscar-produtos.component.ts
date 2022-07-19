import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { CarrinhoService } from 'src/app/service/carrinho.service';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-buscar-produtos',
  templateUrl: './buscar-produtos.component.html',
  styleUrls: ['./buscar-produtos.component.css']
})
export class BuscarProdutosComponent implements OnInit {

  produto: Product = new Product()
  listaProdutos: Product[]
  nomeProduto: string

  key: string
  reverse: boolean

  constructor(
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.findAllProdutos()
  }

  findAllProdutos(){
    return this.produtoService.getAllProduto().subscribe((resp: Product[])=>{
      this.listaProdutos = resp
    })
  }

  findByNomeProduto(){

    if(this.nomeProduto ==''){
      this.findAllProdutos()
    } else{
      this.produtoService.getByNomeProduto(this.nomeProduto).subscribe((resp: Product[]) => {
        this.listaProdutos = resp
      })
    }  
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
