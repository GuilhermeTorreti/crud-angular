import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VeiculosService } from 'src/app/veiculos.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-veiculo-form',
  templateUrl: './veiculo-form.component.html',
  styleUrls: ['./veiculo-form.component.scss']
})
export class VeiculoFormComponent {
  form:FormGroup;
  editMode!: boolean
  idVeiculoEdit!: number
  constructor(private formBuilder: FormBuilder,
    private service: VeiculosService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      marca: [null],
      modelo: [null],
      ano: [null],
      placa: [null],
      disponivel: [null],
      condicoes: [null],
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
              this.idVeiculoEdit = id
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
      this.service.update(this.form.value, this.idVeiculoEdit)
        .subscribe(result => this.onSuccess(), error => this.onError());
    }
  }

  onCancel(){
    this.location.back();
  }

  private onSuccess(){
    this.snackBar.open('Veiculo Salvo com Sucesso', '', { duration: 3000 });
    this.onCancel();
  }

  private onError(){
    this.snackBar.open('Erro ao Adicionar Veiculo', '', { duration: 3000 });
  }
}
