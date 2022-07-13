import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Category } from '../model/Category';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
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
    private alerta: AlertasService, 
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    if(environment.userType != "adm"){
      alert("Você precisa ser Administrador para acessar essa rota")
      this.router.navigate(['/inicio'])
    }
    this.authService.refreshToken()
    this.findAllCategoria()
    this.categoriaService.refreshToken()
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
    if(this.categoria.name == null){
      return this.alerta.showAlertInfo("Você precisa adicionar o nome da categoria.")
    } else{
        this.categoriaService.postCategoria(this.categoria).subscribe((resp: Category) =>{
        this.categoria=resp
        this.alerta.showAlertSuccess("Categoria cadastrada com sucesso!")
        this.findAllCategoria()
        this.categoria = new Category()
      })
    }   
  }
}
