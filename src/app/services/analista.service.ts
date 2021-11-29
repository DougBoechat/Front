import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { analista } from '../models/analista';

@Injectable({
  providedIn: 'root'
})
export class analistaService {

  baseUrl: String = environment.baseUrl;

  constructor(
    private http : HttpClient,
    private snack : MatSnackBar) { }

  findAll(): Observable<analista[]> {
    const url = this.baseUrl + "/analistas";
    return this.http.get<analista[]>(url);

  }

  findById(id: any): Observable<analista> {
    const url = this.baseUrl + "/analistas/" + id;
    return this.http.get<analista>(url);

  }

  create(analista : analista):Observable<analista> {
    const url = this.baseUrl + "/analistas/criar";
    return this.http.post<analista>(url, analista);
  }

  update(analista : analista):Observable<analista> {
    const url = this.baseUrl + "/analistas/" + analista.id;
    return this.http.put<analista>(url, analista);
  }

  delete(analista : analista):Observable<analista> {
    const url = this.baseUrl + "/analistas/" + analista.id;
    console.log(url);
    return this.http.delete<analista>(url);
  }

  message(msg : String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}
