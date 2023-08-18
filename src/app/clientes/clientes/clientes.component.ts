import { ClientesService } from './../services/clientes.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  clientes$: Observable<Cliente[]>;
  displayedColumns = ['name', 'email']

  // clientesService: ClientesService;

  constructor(
    private clientesService: ClientesService,
    public dialog: MatDialog
    ) {
    // this.clientes = [];
    // this.clientesService = new ClientesService();
    this.clientes$ = this.clientesService.list()
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
}
