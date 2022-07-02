import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  id: number
  user: User = new User()

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
   
  }


  findByIdUser(id: number){
    return this.authService.getByIdUsuario(this.id).subscribe((resp: User)=>{
      this.user=resp
    })
  }

  logado(){
    let ok = false
    if(environment.token == ''){
      return ok
    } else{
      ok = true
    }
    this.id = environment.id   
    this.authService.refreshToken()
    this.findByIdUser(this.id)
    return ok
  }

  deslogado(){
    let ok = true
    if(environment.token == ''){
      return ok
    } else{
      ok = false
    }
    return ok
  }

  sair(){
    environment.token=''
    environment.name=''
    environment.photo=''
    environment.id=0
    environment.userType=''
    this.router.navigate(['/inicio'])
  }

}
