import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  
  constructor(
    private http: HttpClient
  ) { }

  token= {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  getAllProduto(): Observable<Product[]>{
    return this.http.get<Product[]>('https://bsmgames.herokuapp.com/products/all')
  }

  getByIdProduto(id: number): Observable<Product>{
    return this.http.get<Product>(`https://bsmgames.herokuapp.com/products/product/${id}`)
  }

  getByNomeProduto(name: string): Observable<Product[]>{
    return this.http.get<Product[]>(`https://bsmgames.herokuapp.com/products/name/${name}`)
  }

  getByConsoleProduto(console: string): Observable<Product[]>{
    return this.http.get<Product[]>(`https://bsmgames.herokuapp.com/products/consoles/${console}`)
  }

  postProduct(product: Product): Observable<Product>{
    return this.http.post<Product>('https://bsmgames.herokuapp.com/products', product, this.token)
  }

  putProduct(product: Product): Observable<Product>{
    return this.http.put<Product>('https://bsmgames.herokuapp.com/products', product, this.token)
  }

  deleteProduct(id: number){
    return this.http.delete(`https://bsmgames.herokuapp.com/products/${id}`, this.token)
  }

}
