import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Category } from '../model/Category';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http: HttpClient
  ) { }

  token= {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllCategoria(): Observable<Category[]>{
    return this.http.get<Category[]>('https://bsmgames.herokuapp.com/categories/all')
  }

  getByIdCategoria(id: number): Observable<Category>{
    return this.http.get<Category>(`https://bsmgames.herokuapp.com/categories/${id}`)
  }

  getByNameCategoria(name: string): Observable<Category[]>{
    return this.http.get<Category[]>(`https://bsmgames.herokuapp.com/categories/name/${name}`)
  }

  postCategoria(category: Category): Observable<Category>{
    return this.http.post<Category>('https://bsmgames.herokuapp.com/categories/', category, this.token)
  }

  putCategoria(category: Category): Observable<Category>{
    return this.http.put<Category>('https://bsmgames.herokuapp.com/categories/', category, this.token)
  }

  deleteCategoria(id: number){
    return this.http.delete(`https://bsmgames.herokuapp.com/categories/${id}`, this.token)
  }
}
