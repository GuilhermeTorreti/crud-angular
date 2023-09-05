import { ClientesService } from './../services/clientes.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  clientes$: Observable<Cliente[]>;
  displayedColumns = ['name', 'email', 'actions']

  // clientesService: ClientesService;

  constructor(
    private clientesService: ClientesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
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

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEdit(cliente: Cliente){
    this.router.navigate([`edit/${cliente._id}`], {relativeTo: this.route});
  }
  onDelete(clienteId: string): void {
    const confirmDelete = confirm('Tem certeza de que deseja excluir este cliente?');

    if (confirmDelete) {
      this.clientesService.delete(clienteId)
        .subscribe(
          () => {
            // Recarregue a lista de clientes após a exclusão (ou atualize o Observable 'clientes$')
            this.clientes$ = this.clientesService.list();
          },
          (error) => {
            this.onError('Erro ao excluir o cliente.');
          }
        );
    }
  }


}
