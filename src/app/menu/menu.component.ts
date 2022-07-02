import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user: User = new User()

  constructor() { }

  ngOnInit(): void {
  }

  logado(){
    let ok = false
    if(environment.token == ''){
      return ok
    } else{
      ok = true
    }
    return true
  }

  deslogado(){
    let ok = true
    if(environment.token == ''){
      return ok
    } else{
      ok = false
    }
    return true
  }

}
