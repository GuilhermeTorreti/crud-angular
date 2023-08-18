import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from '../model/cliente';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private readonly API = '/assets/clientes.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Cliente[]>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap(clientes => console.log(clientes))
    );
  }
}
