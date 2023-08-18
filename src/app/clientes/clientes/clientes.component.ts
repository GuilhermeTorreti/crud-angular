import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [
    { id: '1', name: 'Guilherme Baldo Torreti', email: 'guitorreti@hotmail.com' },
    { id: '2', name: 'Arthur Pirolo de Oliveira', email: 'arthurpirolo@hotmail.com' }
  ];
  displayedColumns = ['name', 'email']

  constructor() {
    // this.clientes = [];
  }

  ngOnInit(): void {

  }
}
