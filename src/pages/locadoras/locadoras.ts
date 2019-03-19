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

    const myModal = this.modal.create('Locadora1Page');

    myModal.present()
  }

  abrirLoc2() {

    const myModal = this.modal.create('Locadora2Page');

    myModal.present();
  }
}