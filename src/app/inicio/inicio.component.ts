import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  produto: Product = new Product()
  listaProdutos: Product[]

  constructor(
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.findAllProdutos()
  }

  findAllProdutos(){
    this.produtoService.getAllProduto().subscribe((resp: Product[])=>{
      this.listaProdutos = resp
    })
  }

}
