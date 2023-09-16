import { first, delay, tap, Observable} from 'rxjs';
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
      tap(veiculos => console.log(veiculos))
    );
  }

  getById(id:number){
    return this.httpClient.get<Veiculo>(`${apiUrl}/${this.API}/${id}`)
    .pipe(
      first(),
      tap(veiculo => console.log(veiculo))
    );
  }

  save(record: Veiculo){
    return this.httpClient.post<Veiculo>(this.API, record);
  }

  update(record: Veiculo, veiculoId: number){
    return this.httpClient.put<Veiculo>(`${apiUrl}/${this.API}/${veiculoId}`, record);
  }

  delete(veiculoId: string): Observable<Veiculo> {
    const url = `${this.API}/funcionarios/${veiculoId}`;
    return this.httpClient.delete<Veiculo>(`${apiUrl}/${this.API}/${veiculoId}`);
}
}
