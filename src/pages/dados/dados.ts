import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-dados',
  templateUrl: 'dados.html'
})
export class DadosPage {

  public nome:string="";
  public email:string="";
  public numero:number;
  public cidade:string="";
  public senha:string="";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nome = this.navParams.get("nome");
    this.email = this.navParams.get("email");
    this.numero = this.navParams.get("numero");
    this.cidade = this.navParams.get("cidade");
    this.senha = this.navParams.get("senha");
  }

  irParaHome() {
    this.navCtrl.push(HomePage);
  }

  irParaLogin() {
    this.navCtrl.push(LoginPage);
  }
}