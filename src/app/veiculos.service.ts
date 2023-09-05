import { first, delay, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veiculo } from './veiculos/model/veiculos';
import { apiUrl } from 'src/environment/api';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {
  private readonly API = 'api/veiculos';
  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Veiculo[]>(`${apiUrl}/${this.API}`)
    .pipe(
      first(),
      delay(3000),
      tap(veiculos => console.log(veiculos))
    );
  }

  save(record: Veiculo){
    return this.httpClient.post<Veiculo>(this.API, record);
  }
}
