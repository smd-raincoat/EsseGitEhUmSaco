import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{CadastroAnotacaoPage} from '../cadastro-anotacao/cadastro-anotacao';
import{AnotacaoPage} from '../anotacao/anotacao';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the AnotacoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anotacoes',
  templateUrl: 'anotacoes.html',
})
export class AnotacoesPage {

  public viagens:any;
  public viagem:any;
  public indexViagem:any;
  public anotacoes:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.viagens = localStorage.getItem('viagens');
    this.viagens = JSON.parse(this.viagens);
    this.indexViagem = localStorage.getItem('indexViagem');
    console.log(this.indexViagem);
    this.viagem = this.viagens[this.indexViagem];
    console.log(this.viagens);
    this.anotacoes = this.viagens[this.indexViagem].anotacoes;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnotacoesPage');
  }

  ionViewWillEnter() {
    this.viagens = JSON.parse(localStorage.getItem("viagens"));
    this.anotacoes = this.viagens[this.indexViagem].anotacoes;
  }

  goCadastroAnotacaoPage(){
    this.navCtrl.push(CadastroAnotacaoPage);
  }
  
  goAnotacaoPage(i):void {
    localStorage.setItem("indexAnotacao",i);
    this.navCtrl.push(AnotacaoPage);
  }

}
