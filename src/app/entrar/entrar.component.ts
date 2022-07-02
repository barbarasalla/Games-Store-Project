import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private authService: AuthService,
    private router: Router,
    private alerta: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
    this.authService.entrar(this.userLogin).subscribe({
      next:(resp: UserLogin) =>{
        this.userLogin=resp
        environment.token = this.userLogin.token
        environment.name= this.userLogin.name
        environment.photo= this.userLogin.photo
        environment.userType = this.userLogin.userType
        environment.id=this.userLogin.id

        this.router.navigate(['/inicio'])
      },
      error: erro => {
        if(erro.status == 401){
          this.alerta.showAlertDanger('Atenção! Usuário ou senha incorretos.')
        }
      }
    })
  }

}
