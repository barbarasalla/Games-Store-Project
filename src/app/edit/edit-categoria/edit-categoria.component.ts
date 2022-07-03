import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/Category';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-edit-categoria',
  templateUrl: './edit-categoria.component.html',
  styleUrls: ['./edit-categoria.component.css']
})
export class EditCategoriaComponent implements OnInit {

  categoria: Category = new Category()

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
    private alerta: AlertasService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.authService.refreshToken()
    let id = this.route.snapshot.params['id']
    this.findByIdCategoria(id)
  }

  findByIdCategoria(id: number){
    return this.categoriaService.getByIdCategoria(id).subscribe((resp: Category)=>{
      this.categoria=resp
  })
}

  editarCategoria(){
      this.authService.refreshToken()
      this.categoriaService.putCategoria(this.categoria).subscribe((resp: Category)=>{
      this.categoria=resp
      this.alerta.showAlertSuccess("Categoria editada com sucesso!")
      this.router.navigate(['/categoria'])
    })    
  }

}
