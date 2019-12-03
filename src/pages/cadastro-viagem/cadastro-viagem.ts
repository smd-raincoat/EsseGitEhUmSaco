import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup} from '@angular/forms'
import {dataProvider} from "../../providers/data/data";
import {HomePage} from '../home/home'



@IonicPage()
@Component({
  selector: 'page-cadastro-viagem',
  templateUrl: 'cadastro-viagem.html',
})
export class CadastroViagemPage {
  
  [x: string]: any;
  
  public cadastroForm = {
    titulo:"",
    data:"",
    cidade:"",
    partida:"",
    retorno:"",
    observacoes:"",
    anotacoes:[]
  }

  public viagens: any;
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cadastroForm = {
      titulo: '',
      data:'',
      cidade:'',
      partida:'',
      retorno:'',
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
    this.viagens.push(this.cadastroForm)
    console.log(this.viagens);
    localStorage.setItem("viagens",JSON.stringify(this.viagens));
  }
  getData(){
    return localStorage.getItem("viagens");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroViagemPage');
    
  }

  goHome(){
    this.navCtrl.pop();
  }

}
