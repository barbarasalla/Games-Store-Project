import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
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
    private produtoService: ProdutoService
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

}
