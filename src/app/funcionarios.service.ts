import { first, delay, tap, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Funcionario } from './funcionarios/model/funcionario';
import { apiUrl } from 'src/environment/api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {
  private readonly API = 'api/funcionarios';
  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Funcionario[]>(`${apiUrl}/${this.API}`)
    .pipe(
      first(),
      delay(2000),
      tap(funcionarios => console.log(funcionarios))
    );
  }

  getById(id:number){
    return this.httpClient.get<Funcionario>(`${apiUrl}/${this.API}/${id}`)
    .pipe(
      first(),
      delay(2000),
      tap(funcionario => console.log(funcionario))
    );
  }

  save(record: Funcionario){
    return this.httpClient.post<Funcionario>(this.API, record);
  }

  update(record: Funcionario, funcionarioId: number){
    return this.httpClient.put<Funcionario>(`${apiUrl}/${this.API}/${funcionarioId}`, record);
  }

  delete(funcionarioId: string): Observable<Funcionario> {
    const url = `${this.API}/funcionarios/${funcionarioId}`;
    return this.httpClient.delete<Funcionario>(`${apiUrl}/${this.API}/${funcionarioId}`);
}
}
