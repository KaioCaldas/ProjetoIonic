import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BuscaPage } from '../busca/busca';
import { LocadorasPage } from '../locadoras/locadoras';
import { DadosPage } from '../dados/dados';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  irParaLogin() {
    this.navCtrl.push(LoginPage);
  }

  irParaBusca() {
    this.navCtrl.push(BuscaPage);
  }

  irParaLocadoras() {
    this.navCtrl.push(LocadorasPage);
  }

  irParaDados() {
    this.navCtrl.push(DadosPage);
  }
}