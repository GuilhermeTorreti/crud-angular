import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Funcionario } from './model/funcionario';
import { FuncionariosService } from '../funcionarios.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorDialogComponent } from '../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss'],
})
export class FuncionariosComponent implements OnInit  {
  funcionarios$: Observable<Funcionario[]>;
  displayedColumns = ['name', 'email', 'actions']


  constructor(
    private funcionariosService: FuncionariosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
    ) {
    // this.clientes = [];
    // this.clientesService = new ClientesService();
    this.funcionarios$ = this.funcionariosService.list()
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
