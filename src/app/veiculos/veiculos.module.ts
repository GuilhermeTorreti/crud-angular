import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { VeiculosComponent } from './veiculos.component';
import { VeiculoFormComponent } from './veiculo-form/veiculo-form.component';
import { VeiculosRoutingModule } from './veiculos-routing.module';


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
    ReactiveFormsModule
  ]
})
export class VeiculosModule { }
