import { Injectable } from '@angular/core';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  produtos: Product[] = []
  totalProdutos: number
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
  
}
