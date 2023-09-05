import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionariosComponent } from './funcionarios.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';

const routes: Routes = [
  { path: '', component: FuncionariosComponent },
  { path: 'new', component: FuncionarioFormComponent },
  { path: 'edit/:id', component: FuncionarioFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
