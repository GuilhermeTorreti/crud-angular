import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorDialogComponent } from '../shared/components/error-dialog/error-dialog.component';
import { Locacao } from './model/locacao';
import { LocacaoService } from './services/locacao.service';
import { ConvertDate } from 'src/utils/ConvertDate';

@Component({
  selector: 'app-locacao',
  templateUrl: './locacao.component.html',
  styleUrls: ['./locacao.component.scss'],
})
export class LocacaoComponent implements OnInit {
  locacoes$: Observable<Locacao[]>;
  displayedColumns = ['dataLoc', 'dataDevolucao', 'funcionario', 'veiculo', 'cliente', 'actions'];

  constructor(
    private locacaoService: LocacaoService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private convertDate: ConvertDate
  ) {
    // this.clientes = [];
    // this.clientesService = new ClientesService();
    this.locacoes$ = this.locacaoService.list().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar os dados.');
        return of([]);
      })
    );
  }
  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {}

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(locacao: Locacao) {
    this.router.navigate([`edit/${locacao._id}`], { relativeTo: this.route });
  }

  onDelete(locacaoId: string): void {
    const confirmDelete = confirm(
      'Tem certeza de que deseja excluir este Veiculo?'
    );

    if (confirmDelete) {
      this.locacaoService.delete(locacaoId).subscribe(
        () => {
          // Recarregue a lista de clientes após a exclusão (ou atualize o Observable 'funcionarios$')
          this.locacoes$ = this.locacaoService.list();
        },
        (error) => {
          this.onError('Erro ao excluir o veiculo.');
        }
      );
    }
  }

  onConvertDate(date: string){
    return this.convertDate.toDDMMYYYY(date)
  }
}
