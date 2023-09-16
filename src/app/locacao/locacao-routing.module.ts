import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocacaoComponent } from './locacao.component';
import { LocacaoFormComponent } from './locacao-form/locacao-form.component';

const routes: Routes = [
  { path: '', component: LocacaoComponent },
  { path: 'new', component: LocacaoFormComponent },
  { path: 'edit/:id', component: LocacaoFormComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocacaoRoutingModule { }
