import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup} from '@angular/forms'
import {dataProvider} from "../../providers/data/data";
import {HomePage} from '../home/home'


/**
 * Generated class for the AlterarViagemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alterar-viagem',
  templateUrl: 'alterar-viagem.html',
})
export class AlterarViagemPage {
  [x: string]: any;
  
  public cadastroForm = {
    titulo:"",
    data:"",
    cidade:"",
    partidaData:'',
    partidaHora:'',
    retornoData:'',
    retornoHora:'',
    observacoes:"",
    anotacoes:[]
  }

  public indexViagem:any;

  public viagens: any;
  public viagem:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cadastroForm = {
      titulo: '',
      data:'',
      cidade:'',
      partidaData:'',
      partidaHora:'',
      retornoData:'',
      retornoHora:'',
      observacoes:'',
      anotacoes:[]
    }
  }

  setData(titulo: string,data: string, cidade: string, partidaData: string,partidaHora:string, retornoData: string,retornoHora: string, observacoes: string){
    let cadastroForm = {
      titulo: '',
      data:'',
      cidade:'',
      partidaData:'',
      partidaHora:'',
      retornoData:'',
      retornoHora:'',
      observacoes:''
    } 
    cadastroForm.titulo = titulo;
    cadastroForm.data = data;
    cadastroForm.cidade = cidade;
    cadastroForm.partidaData = partidaData;
    cadastroForm.partidaHora = partidaHora;
    cadastroForm.retornoData = retornoData;
    cadastroForm.retornoHora = retornoHora;
    cadastroForm.observacoes = observacoes;

  }
  logForm(){
    console.log(this.cadastroForm);
    console.log(this.viagens);
    this.viagens = localStorage.getItem('viagens');
    console.log(this.viagens);
    this.viagens = JSON.parse(this.viagens);
    this.viagens[this.indexViagem] = this.cadastroForm;
    console.log(this.viagens);
    localStorage.setItem("viagens",JSON.stringify(this.viagens));
  }
  getData(){
    return localStorage.getItem("viagens");
  }
  ionViewWillEnter() {
    this.viagens = localStorage.getItem('viagens');
    this.viagens = JSON.parse(this.viagens);
    this.indexViagem = localStorage.getItem('indexViagem'); 
    this.cadastroForm.titulo = this.viagens[this.indexViagem].titulo;
    this.cadastroForm.data = this.viagens[this.indexViagem].data;
    this.cadastroForm.cidade = this.viagens[this.indexViagem].cidade;
    this.cadastroForm.partidaData = this.viagens[this.indexViagem].partidaData;
    this.cadastroForm.partidaHora = this.viagens[this.indexViagem].partidaHora;
    this.cadastroForm.retornoData = this.viagens[this.indexViagem].retornoData;
    this.cadastroForm.retornoHora = this.viagens[this.indexViagem].retornoHora;
    this.cadastroForm.observacoes = this.viagens[this.indexViagem].observacoes;
    
  }

  goHome(){
    this.navCtrl.pop();
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlterarViagemPage');
  }

}
