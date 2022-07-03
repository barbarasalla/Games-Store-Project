import { Component, OnInit } from '@angular/core';
import { Category } from '../model/Category';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoria: Category = new Category()
  listaCategoria: Category[]
  nomeCategoria: string


  constructor(
    private categoriaService: CategoriaService,
    private alerta: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    this.findAllCategoria()
  }

  findByNomeCategoria(){
    if(this.nomeCategoria==''){
      this.findAllCategoria()
    }else{
      this.categoriaService.getByNameCategoria(this.nomeCategoria).subscribe((resp: Category[])=>{
        this.listaCategoria=resp
      })
    }    
  }

  findAllCategoria(){
    return this.categoriaService.getAllCategoria().subscribe((resp: Category[])=>{
      this.listaCategoria = resp
    })
  }

  cadastrarCategoria(){
    return this.categoriaService.postCategoria(this.categoria).subscribe((resp: Category) =>{
      this.categoria=resp
      this.alerta.showAlertSuccess("Categoria cadastrada com sucesso!")
      this.findAllCategoria()
      this.categoria = new Category()
    })
  }
}
