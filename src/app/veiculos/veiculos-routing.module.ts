import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeiculosComponent } from './veiculos.component';
import { VeiculoFormComponent } from './veiculo-form/veiculo-form.component';

const routes: Routes = [
  { path: '', component: VeiculosComponent },
  { path: 'new', component: VeiculoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculosRoutingModule { }
