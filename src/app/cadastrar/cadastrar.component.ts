import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User()
  confirmaSenha: string
  
  constructor(
    private alertasService: AlertasService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmarSenha(event: any){
    this.confirmaSenha = event.target.value
  }

  cadastrar(){
    if(this.confirmaSenha != this.user.passWord){
      this.alertasService.showAlertInfo('As senhas estão incorretas.')
    } else{
      this.user.userType = 'padrao'
      this.authService.cadastrar(this.user).subscribe((resp: User)=>{
        this.user = resp
        this.alertasService.showAlertSuccess('Usuário cadastrado com sucesso!')
        this.router.navigate(['/entrar'])
      })
    }
  }

}
