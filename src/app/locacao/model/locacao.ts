import { Cliente } from "src/app/clientes/model/cliente";
import { Funcionario } from "src/app/funcionarios/model/funcionario";
import { Veiculo } from "src/app/veiculos/model/veiculos";

export interface Locacao {
  _id: number;
  dataLoc: string
  dataDevolucao: string
  valor: number
  clienteId: number
  veiculoId: number
  funcionarioId: number
  veiculo: Veiculo
  funcionario: Funcionario
  cliente: Cliente
}
