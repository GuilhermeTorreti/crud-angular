import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { VeiculosComponent } from './veiculos.component';
import { VeiculoFormComponent } from './veiculo-form/veiculo-form.component';
import { VeiculosRoutingModule } from './veiculos-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    VeiculosComponent,
    VeiculoFormComponent
  ],
  imports: [
    CommonModule,
    VeiculosRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class VeiculosModule { }
