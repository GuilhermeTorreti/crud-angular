import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeService } from '../home/service/home.service';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  usuario!: string
  senha!: string
  constructor(private homeService: HomeService, private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    this.homeService.hide();
  }

  ngOnDestroy(): void {
    this.homeService.show();
  }

  onLogin(){
    this.loginService.login(this.usuario, this.senha).then((result) => {
      if(result){
        this.router.navigate(['/locacoes'])
      } else {
        alert('Credênciais inválidas!')
      }
    })
  }
}
