import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { pagamento } from '../models/pagamento';

@Injectable({
  providedIn: 'root'
})
export class pagamentoService {

  baseUrl: String = environment.baseUrl;

  constructor(
    private http : HttpClient,
    private snack : MatSnackBar) { }

  findAll(): Observable<pagamento[]> {
    const url = this.baseUrl + "/pagamentos";
    return this.http.get<pagamento[]>(url);

  }

  findById(id: any): Observable<pagamento> {
    const url = this.baseUrl + "/pagamentos/" + id;
    return this.http.get<pagamento>(url);

  }

  create(pagamento : pagamento):Observable<pagamento> {
    const url = this.baseUrl + "/pagamentos/criar";
    return this.http.post<pagamento>(url, pagamento);
  }

  update(pagamento : pagamento):Observable<pagamento> {
    const url = this.baseUrl + "/pagamentos/" + pagamento.pagamentoId?.idPagamento
    return this.http.put<pagamento>(url, pagamento);
  }

  delete(pagamento : pagamento):Observable<pagamento> {
    const url = this.baseUrl + "/pagamentos/" + pagamento.pagamentoId?.idPagamento
    console.log(url);
    return this.http.delete<pagamento>(url);
  }

  message(msg : String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}
