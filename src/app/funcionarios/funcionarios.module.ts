import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { FuncionariosComponent } from './funcionarios.component';
import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FuncionariosComponent,
    FuncionarioFormComponent
  ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class FuncionariosModule { }
