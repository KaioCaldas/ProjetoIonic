import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  @ViewChild('email') email;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController) {

  }

  login() {
    console.log(this.email.value, this.password.value);
  }

  irParaCadastro() {
      this.navCtrl.push(CadastroPage);
  }
}