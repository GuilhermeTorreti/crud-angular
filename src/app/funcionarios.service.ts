import { first, delay, tap } from 'rxjs';
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
      delay(3000),
      tap(funcionarios => console.log(funcionarios))
    );
  }

  save(record: Funcionario){
    return this.httpClient.post<Funcionario>(this.API, record);
  }
}
