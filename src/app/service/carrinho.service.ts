import { Injectable } from '@angular/core';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  product: Product = new Product()
  produtos: Product[] = []
  totalProdutos: number

  quant: number = 1

  constructor() { }

  addProduto(produto: Product){
    this.produtos.push(produto)
    this.totalProdutos = this.produtos.length
  }

  listarProdutos(){
    return this.produtos
  }

  limparProdutos(){
    this.produtos = []
    return this.produtos;
  }
  
  deletarProduto(id: number){
    for(let i: number = 0; i>= this.produtos.length; i++){
      if(this.product.id == id){
        let index: number = this.produtos.indexOf(this.product);
        this.produtos.splice(index, 1);
      }
    }
  }

}
