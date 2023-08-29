import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from '../model/cliente';
import { delay, first, tap } from 'rxjs';
import { apiUrl } from 'src/environment/api';

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
      delay(3000),
      tap(clientes => console.log(clientes))
    );
  }

  save(record: Cliente){
    return this.httpClient.post<Cliente>(this.API, record);
  }
}
