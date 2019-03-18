import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-locadoras',
  templateUrl: 'locadoras.html'
})
export class LocadorasPage {

  constructor(private modal: ModalController) {

  }

  abrirLoc1() {

    const myData = {
      nome: 'Locadora Brasil',
      endereco: 'Rua Aleatória',
      bairro: 'Centro',
      telefone: '2222-2222'
    };
    const myModal = this.modal.create('Locadora1Page', {data: myData});

    myModal.present()
  }

  abrirLoc2() {

    const myData = {
      nome: 'Locadora Partiu',
      endereco: 'Rua João das Couves',
      bairro: 'Centro',
      telefone: '9999-9999'
    };
    const myModal = this.modal.create('Locadora2Page', {data: myData});

    myModal.present();
  }
}