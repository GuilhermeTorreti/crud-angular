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
      delay(2000),
      tap(clientes => console.log(clientes))
    );
  }

  save(record: Cliente){
    return this.httpClient.post<Cliente>(this.API, record);
  }
  delete(clienteId: string): Observable<Cliente> {
    const url = `${this.API}/clientes/${clienteId}`;
    return this.httpClient.delete<Cliente>(url);
}
}
