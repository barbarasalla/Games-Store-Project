import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/Product';
import { AlertasService } from '../service/alertas.service';
import { CarrinhoService } from '../service/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  
  produto: Product = new Product()
  listaProdutos = this.carrinhoService.listarProdutos()

  quant: number
  comprados = this.carrinhoService.listarProdutos()

  constructor(
    private carrinhoService: CarrinhoService,
    private alerta: AlertasService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }


  deletarProdutos(){
    this.carrinhoService.deletarProduto(this.produto.id);
    this.carrinhoService.listarProdutos()
  }

  total() {
    return this.comprados.map((item) => item.price).reduce((a, b) => a + b, 0);
  }

  finalizarCompra(){
    this.alerta.showAlertSuccess("Pedido Realizado com Sucesso!")
    this.carrinhoService.limparProdutos()
    this.carrinhoService.listarProdutos()
    this.router.navigate(['/inicio'])
  }

}
