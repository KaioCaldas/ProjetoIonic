import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the Locadora2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-locadora2',
  templateUrl: 'locadora2.html',
})
export class Locadora2Page {

  constructor(private navParams: NavParams, private view: ViewController) {
  }

  locData2 = {
    nome: 'Locadora Partiu',
    endereco: 'Rua João das Couves',
    bairro: 'Centro',
    telefone: '9999-9999'
  };

  ionViewWillLoad() {
    const data = this.navParams.get('data');
    console.log(data);
  }

  fecharModal() {
    this.view.dismiss();
  }
}
