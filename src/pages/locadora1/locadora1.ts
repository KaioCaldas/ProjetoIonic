import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the Locadora1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-locadora1',
  templateUrl: 'locadora1.html',
})
export class Locadora1Page {

  constructor(private navParams: NavParams, private view: ViewController) {
  }

  locData1 = {
    nome: 'Locadora Brasil',
    endereco: 'Rua Aleatória',
    bairro: 'Centro',
    telefone: '2222-2222'
  };

  ionViewWillLoad() {
    const data = this.navParams.get('data');
    console.log(data);
  }

  fecharModal() {
    this.view.dismiss();
  }
}
