import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  token={
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  getByIdUsuario(id: number): Observable<User>{
    return this.http.get<User>(`https://bsmgames.herokuapp.com/user/${id}`, this.token)
  }

  atualizarUser(user: User): Observable<User>{
    return this.http.put<User>('https://bsmgames.herokuapp.com/user/', user, this.token)
  }

  deletarUser(id: number){
    return this.http.delete(`https://bsmgames.herokuapp.com/user/delete/${id}`, this.token)
  }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://bsmgames.herokuapp.com/user/login', userLogin)
  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('https://bsmgames.herokuapp.com/user/register', user)
  }
}
