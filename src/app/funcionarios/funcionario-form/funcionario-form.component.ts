import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FuncionariosService } from 'src/app/funcionarios.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.scss']
})
export class FuncionarioFormComponent implements OnInit {
  form:FormGroup;
  editMode!: boolean
  idFuncionarioEdit!: number

  constructor(private formBuilder: FormBuilder,
    private service: FuncionariosService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      name: [null],
      email: [null],
      gender: [null],
      cpf: [null],
      telefone: [null],
      endereco: [null],
      numero: [null],
      bairro: [null],
      cep: [null],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe({
    next: (params) => {
      const id = params['id'];
      if (id) {
        this.service.getById(id).subscribe({
          next: (response) => {
            this.form.patchValue(response)
            this.editMode = true
            this.idFuncionarioEdit = id
          }
        })
      }
    },
  });

  }


  onSubmit(){
    console.log('AAAA: ', this.form.value)
    if(!this.editMode){
      this.service.save(this.form.value)
        .subscribe(result => this.onSuccess(), error => this.onError());

    } else {
      this.service.update(this.form.value, this.idFuncionarioEdit)
        .subscribe(result => this.onSuccess(), error => this.onError());
    }
  }
  onCancel(){
    this.location.back();
  }

  private onSuccess(){
    this.snackBar.open('Funcionario Salvo com Sucesso', '', { duration: 3000 });
    this.onCancel();
  }

  private onError(){
    this.snackBar.open('Erro ao Adicionar Funcionario', '', { duration: 3000 });
  }
}
