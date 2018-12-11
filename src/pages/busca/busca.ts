import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-busca',
  templateUrl: 'busca.html'
})
export class BuscaPage {

  itens;

  constructor(public navCtrl: NavController) {
    this.inicializarItens();
  }

  inicializarItens() {
    this.itens = [
      'Carro 1',
      'Carro 2',
      'Carro 2 sedan',
      'Carro 3',
      'Carro 3 conversível',
      'Carro 4',
      'Carro 5'
    ];
  }

  getItens(ev) {
    this.inicializarItens();

    var val = ev.target.value;

    if(val && val.trim() != '') {
      this.itens = this.itens.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}