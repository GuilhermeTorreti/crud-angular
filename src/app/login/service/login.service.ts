import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {
  }

  async login(usuario: string, senha: string): Promise<boolean> {
    if(senha !== 'admin' || usuario !== 'admin'){
      return false
    } else {
      return true
    }
  }
}
