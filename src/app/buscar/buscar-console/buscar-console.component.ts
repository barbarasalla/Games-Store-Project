import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { CarrinhoService } from 'src/app/service/carrinho.service';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-buscar-console',
  templateUrl: './buscar-console.component.html',
  styleUrls: ['./buscar-console.component.css']
})
export class BuscarConsoleComponent implements OnInit {
  produto: Product = new Product()
  listaProdutos: Product[]
  nomeProduto: string

  nomeConsole: string
  consoleId: number
  console: string

  key: string
  reverse: boolean

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    let id= this.route.snapshot.params['id']
    this.findIdConsole(id)
   
  }
  
  findIdConsole(id: number){
    this.consoleId = id
    if(this.consoleId==1){
      this.console = "Nintendo Switch";
    }
    if(this.consoleId==2){
      this.console = "PS5";
    }
    if(this.consoleId==3){
      this.console = "XBOX ONE";
    }
    if(this.consoleId==4){
      this.console = "Playstation 4";
    }
    this.findAllProdutos()
  }

  findAllProdutos(){
    return this.produtoService.getAllProduto().subscribe((resp: Product[])=>{
      this.listaProdutos = resp
      this.nomeProduto = this.console
      let id= this.route.snapshot.params['id']
    this.findIdConsole(id)
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
