import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{CadastroAnotacaoPage} from '../cadastro-anotacao/cadastro-anotacao';
import{AnotacaoPage} from '../anotacao/anotacao';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import {AnotacoesPage} from '../anotacoes/anotacoes';
import { ToastController } from 'ionic-angular';
import { AlterarViagemPage} from '../alterar-viagem/alterar-viagem';
import { GalleryPage } from '../gallery/gallery';

@IonicPage()
@Component({
  selector: 'page-viagem',
  templateUrl: 'viagem.html',
})
export class ViagemPage {

  public viagens:any;
  public viagem:any;
  public indexViagem:any;
  public anotacoes:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,public toastController: ToastController) {
    
    this.viagens = localStorage.getItem('viagens');
    this.viagens = JSON.parse(this.viagens);
    this.indexViagem = localStorage.getItem('indexViagem');
    console.log(this.indexViagem);
    this.viagem = this.viagens[this.indexViagem];
    console.log(this.viagens);
    this.anotacoes = this.viagens[this.indexViagem].anotacoes;
  }

  ionViewWillEnter() {
    this.indexViagem = localStorage.getItem('indexViagem');
    this.viagens = JSON.parse(localStorage.getItem("viagens"));
    this.anotacoes = this.viagens[this.indexViagem].anotacoes;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViagemPage');
    console.log(this.viagem); 
  }
  
  goAnotacoesPage(){
    this.navCtrl.push(AnotacoesPage);
  }

  goAnotacaoPage(i):void {
    localStorage.setItem("indexAnotacao",i);
    this.navCtrl.push(AnotacaoPage);
  }

  goGallery(){
    this.navCtrl.push(GalleryPage);

  }

  verDados(){
    let alert = this.alertCtrl.create({
      title: 'Sobre viagem',
      message: 'Título:'+ this.viagem.titulo + '<br>Cidade:' + this.viagem.cidade + 
      '<br>Data de partida:'+ this.viagem.partidaData +'<br>Hora de partida:'+ this.viagem.partidaHora +
      '<br>Data de retorno:'+ this.viagem.retornoData +'<br>Hora de partida:'+ this.viagem.retornoHora +
      '<br>Observações:' + this.viagem.observacoes ,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Editar',
          handler: () => {
            this.navCtrl.push(AlterarViagemPage);
          }
        }
      ]
    });
    alert.present();
  }

  apagarViagem(){
    let alert = this.alertCtrl.create({
      title: 'Apagar Viagem!',
      message: 'Você deseja mesmo apagar essa viagem?',
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
            this.viagens.splice(this.indexViagem,1);
            localStorage.setItem("viagens", JSON.stringify(this.viagens));
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }

  alerta(){
    const toast = this.toastController.create({
      message: 'Função ainda não disponível',
      duration: 2000
    });
    toast.present();
  }


}
