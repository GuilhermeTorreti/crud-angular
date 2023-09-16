import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { delay, first, tap } from 'rxjs';
import { apiUrl } from 'src/environment/api';
import { Observable } from 'rxjs';
import { Locacao } from '../model/locacao';

@Injectable({
  providedIn: 'root'
})
export class LocacaoService {

  private readonly API = 'api/locacoes';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Locacao[]>(`${apiUrl}/${this.API}`)
    .pipe(
      first(),
      tap(locacoes => console.log(locacoes))
    );
  }

  getById(id:number){
    return this.httpClient.get<Locacao>(`${apiUrl}/${this.API}/${id}`)
    .pipe(
      first(),
      tap(locacao => console.log(locacao))
    );
  }

  save(record: Locacao){
    return this.httpClient.post<Locacao>(this.API, record);
  }

  update(record: Locacao, locacaoId: number){
    return this.httpClient.put<Locacao>(`${apiUrl}/${this.API}/${locacaoId}`, record);
  }
  delete(locacaoId: string): Observable<Locacao> {
    const url = `${this.API}/locacoes/${locacaoId}`;
    return this.httpClient.delete<Locacao>(`${apiUrl}/${this.API}/${locacaoId}`);
}
}
