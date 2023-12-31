import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from '../model/cliente';
import { delay, first, tap } from 'rxjs';
import { apiUrl } from 'src/environment/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private readonly API = 'api/clientes';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Cliente[]>(`${apiUrl}/${this.API}`)
    .pipe(
      first(),
      tap(clientes => console.log(clientes))
    );
  }

  getById(id:number){
    return this.httpClient.get<Cliente>(`${apiUrl}/${this.API}/${id}`)
    .pipe(
      first(),
      tap(cliente => console.log(cliente))
    );
  }

  save(record: Cliente){
    return this.httpClient.post<Cliente>(this.API, record);
  }

  update(record: Cliente, clienteId: number){
    return this.httpClient.put<Cliente>(`${apiUrl}/${this.API}/${clienteId}`, record);
  }
  delete(clienteId: string): Observable<Cliente> {
    const url = `${this.API}/clientes/${clienteId}`;
    return this.httpClient.delete<Cliente>(`${apiUrl}/${this.API}/${clienteId}`);
}
}
