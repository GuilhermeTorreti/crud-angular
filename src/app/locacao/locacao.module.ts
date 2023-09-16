import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { LocacaoComponent } from './locacao.component';
import { RouterModule } from '@angular/router';
import { LocacaoFormComponent } from './locacao-form/locacao-form.component';
import { LocacaoRoutingModule } from './locacao-routing.module';


@NgModule({
  declarations: [
    LocacaoComponent,
    LocacaoFormComponent
  ],
  imports: [
    CommonModule,
    LocacaoRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ]
})
export class LocacaoModule { }
