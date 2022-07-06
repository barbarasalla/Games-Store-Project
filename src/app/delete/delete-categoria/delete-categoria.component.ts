import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/Category';
import { AlertasService } from 'src/app/service/alertas.service';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-delete-categoria',
  templateUrl: './delete-categoria.component.html',
  styleUrls: ['./delete-categoria.component.css']
})
export class DeleteCategoriaComponent implements OnInit {

  categoria: Category = new Category()

  categoriaId: number

  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private alerta: AlertasService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    this.categoriaService.refreshToken()
    this.categoriaId = this.route.snapshot.params['id']
    this.findByIdCategoria(this.categoriaId)
  }

  findByIdCategoria(id: number){
      return this.categoriaService.getByIdCategoria(id).subscribe((resp: Category)=>{
        this.categoria=resp
      })
  }
  apagarCategoria(){
    this.categoriaService.deleteCategoria(this.categoriaId).subscribe(()=>{
      this.alerta.showAlertSuccess("Categoria apagada com sucesso!")
      this.router.navigate(['/categoria'])
    })
  }
}
