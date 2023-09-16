import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VeiculosService } from 'src/app/veiculos.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LocacaoService } from '../services/locacao.service';
import { Funcionario } from 'src/app/funcionarios/model/funcionario';
import { Veiculo } from 'src/app/veiculos/model/veiculos';
import { Cliente } from 'src/app/clientes/model/cliente';
import { FuncionariosService } from 'src/app/funcionarios.service';
import { ClientesService } from 'src/app/clientes/services/clientes.service';

@Component({
  selector: 'app-locacao-form',
  templateUrl: './locacao-form.component.html',
  styleUrls: ['./locacao-form.component.scss']
})
export class LocacaoFormComponent {
  form!:FormGroup;
  editMode!: boolean
  idLocacaoEdit!: number

  funcionarios!: Funcionario[]
  veiculos!: Veiculo[]
  clientes!: Cliente[]

  veiculoSelecionado!: Veiculo
  funcionarioSelecionado!: Funcionario
  clienteSelecionado!: Cliente
  constructor(private formBuilder: FormBuilder,
    private service: LocacaoService,
    private funcionarioService: FuncionariosService,
    private veiculosService: VeiculosService,
    private clienteService: ClientesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {
    

    
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      dataLoc: [null],
      dataDevolucao: [null],
      valor: [null],
      cliente: [null],
      funcionario: [null],
      veiculo: [null],
      condicoes: [null],
    });
    this.route.params.subscribe({
      next: (params) => {
        const id = params['id'];
        if (id) {
          this.service.getById(id).subscribe({
            next: (response) => {
              this.form.patchValue(response)
              this.editMode = true
              this.idLocacaoEdit = id
              this.veiculoSelecionado = response.veiculo
              this.funcionarioSelecionado = response.funcionario
              this.clienteSelecionado = response.cliente
            }
          })
        }
      },
    });
    this.funcionarioService.list().subscribe((response) => {
      this.funcionarios = response
    })

    this.veiculosService.list().subscribe((response) => {
      this.veiculos = response
    })

    this.clienteService.list().subscribe((response) => {
      this.clientes = response
    })
    
  }


  onSubmit(){
    console.log('AAAA: ', this.form.value)
    const valores = this.form.value
    const form = {
      ...valores,
      funcionarioId: valores.funcionario._id,
      veiculoId: valores.veiculo._id,
      clienteId: valores.cliente._id,
    }
    if(!this.editMode){
      this.service.save(form)
        .subscribe(result => this.onSuccess(), error => this.onError());

    } else {
      this.service.update(form, this.idLocacaoEdit)
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
