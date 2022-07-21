import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/Product';
import { CarrinhoService } from '../service/carrinho.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {

  produto: Product = new Product()

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    let id = this.route.snapshot.params['id']
    this.findByIdProduto(id)
  }

  findByIdProduto(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Product)=>{
      this.produto = resp
    })
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
