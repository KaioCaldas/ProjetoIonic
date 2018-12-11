import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DadosPage } from '../dados/dados';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroPage {

  public nome:string="";
  public email:string="";
  public numero:number;
  public cidade:string="";
  public senha:string="";

  constructor(public navCtrl: NavController) { }

  salvar() {
    this.navCtrl.push(DadosPage, {
      nome: this.nome,
      email: this.email,
      numero: this.numero,
      cidade: this.cidade,
      senha: this.senha
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }
}