import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  produto: Product = new Product()
  listaProdutos: Product[]

  constructor() { }

  ngOnInit() {
    window.scroll(0,0)
  }

}
