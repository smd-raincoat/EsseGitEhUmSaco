import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {ViagemPage} from '../viagem/viagem';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the AnotacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anotacao',
  templateUrl: 'anotacao.html',
})


export class AnotacaoPage {
  public viagens:any;
  public viagem:any;
  public indexViagem:any;
  public indexAnotacao:any;
  public anotacao:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,public toastController: ToastController) {
    this.viagens = localStorage.getItem('viagens');
    this.viagens = JSON.parse(this.viagens);
    this.indexViagem = localStorage.getItem('indexViagem');
    this.indexAnotacao = localStorage.getItem('indexAnotacao');
    console.log(this.indexViagem);
    this.viagem = this.viagens[this.indexViagem];
    console.log(this.viagens);
    this.anotacao = this.viagens[this.indexViagem].anotacoes[this.indexAnotacao];
    console.log(this.anotacao);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnotacaoPage');
  }

  alerta(){
    const toast = this.toastController.create({
      message: 'Função ainda não disponível',
      duration: 2000
    });
    toast.present();
  }

  apagarAnotacao(){
    let alert = this.alertCtrl.create({
      title: 'Apagar Ponto!',
      message: 'Você deseja mesmo apagar esse ponto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Apagar',
          handler: () => {
            this.viagens[this.indexViagem].anotacoes.splice(this.indexAnotacao,1);
            localStorage.setItem("viagens", JSON.stringify(this.viagens));
            this.navCtrl.pop();
          }
        } 
      ]
    });
    alert.present();
    
  }

}
