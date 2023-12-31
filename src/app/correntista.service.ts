import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorrentistaService {

  constructor(
    private http: HttpClient
  ) { }

  loginValido: boolean = false;
  dadosUsuario: any;

  public login(cpf: string) : Observable<any> {
    return this.http.get("http://localhost:8080/correntista/entrar/"+cpf);
  }

  public saldo(id: number) : Observable<any> {
    return this.http.get("http://localhost:8080/movimentacao/saldo/"+id);
  }

  public extrato(id: number) : Observable<any[]> {
    return this.http.get<any>("http://localhost:8080/movimentacao/extrato/"+id);
  }
}
