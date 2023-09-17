import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import {  LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [
   LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ]
})
export class LoginModule { }
