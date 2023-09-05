import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Veiculo } from './model/veiculos';
import { VeiculosService } from '../veiculos.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorDialogComponent } from '../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.scss']
})
export class VeiculosComponent implements OnInit {
  veiculos$: Observable<Veiculo[]>;
  displayedColumns = ['Marca', 'Modelo', 'Placa', 'actions']

  constructor(
    private veiculosService: VeiculosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
    ) {
    // this.clientes = [];
    // this.clientesService = new ClientesService();
    this.veiculos$ = this.veiculosService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar os dados.')
        return of([])
      })
    );
  }
  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
