import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import {ViagemPage} from '../viagem/viagem';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PhotosProvider } from '../../providers/photos/photos';

/**
 * Generated class for the CadastroAnotacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-anotacao',
  templateUrl: 'cadastro-anotacao.html',
})
export class CadastroAnotacaoPage {

  [x: string]: any;
  photos: any;
  imagem: string = '';
  public cadastroForm = {
    titulo:"",
    data:"",
    hora:"",
    coordenadaX:"",
    coordenadaY:"",
    altitude:"",
    texto:"",
    imagem:""
  }

  public viagens: any;
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private camera: Camera,private alertCtrl: AlertController,
    public toastController: ToastController, private photoservice: PhotosProvider) {
    this.cadastroForm = {
      titulo:"",
      data:"",
      hora:"",
      coordenadaX:"",
      coordenadaY:"",
      altitude:"",
      texto:"",
      imagem:"",
    }
    this.viagens = localStorage.getItem('viagens');
    
  }
  setData(data: string, hora: string, coordenadas: string, texto: string, titulo:string, coordenadaX: string, coordenadaY:string, altitude: string, imagem: string){
    let cadastroForm = {
      titulo:"",
      data:"",
      hora:"",
      coordenadaX:"",
      coordenadaY:"",
      altitude:"",
      texto:"",
      imagem:"",
    } 
    cadastroForm.titulo = titulo;
    cadastroForm.data = data;
    cadastroForm.hora = hora;
    cadastroForm.coordenadaX = coordenadaX;
    cadastroForm.coordenadaY = coordenadaY;
    cadastroForm.altitude = altitude;
    cadastroForm.texto = texto;
    cadastroForm.imagem = imagem;

  }
  logForm(){
    this.cadastroForm.imagem = this.imagem;
    this.viagens = localStorage.getItem('viagens');
    this.viagens = JSON.parse(this.viagens);
    this.viagens[localStorage.getItem("indexViagem")].anotacoes.push(this.cadastroForm);
    localStorage.setItem("viagens",JSON.stringify(this.viagens));
  }
  
  getData(){
    return localStorage.getItem("viagens");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroAnotacaoPage');
  }

  goViagem(){
    this.navCtrl.pop();
  }

  cameraOptions(){
    let alert = this.alertCtrl.create({
      title: 'Adicionar Fotos',
      buttons: [
        {
          text: 'Abrir câmera',
          handler: () => {
            this.openCamera();
          }
        },
        {
          text: 'Selecionar do Dispositivo',
          handler: () => {
            this.openGallery();
          }
        }
      ]
    });
    alert.present();
    
  }
  openCamera(){
    this.imagem = '';
 
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      saveToPhotoAlbum: true
      
      /*targetWidth: 100,
      targetHeight: 100*/
    }
 
    this.camera.getPicture(options)
      .then((imageData) => {
        let base64image = 'data:image/jpeg;base64,' + imageData;
        this.imagem = base64image;
        //this.imagens.push(this.imagem);
 
      }, (error) => {
        console.error(error);
      })
      .catch((error) => {
        console.error(error);
      });
      
  }
  openGallery(){
    this.imagem = '';
 
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true,
      targetWidth: 100,
      targetHeight: 100
    }
 
    this.camera.getPicture(options)
      .then((imageData) => {
        let base64image = 'data:image/jpeg;base64,' + imageData;
        this.imagem = base64image;
        //this.imagens.push(this.imagem);
 
      }, (error) => {
        console.error(error);
      })
      .catch((error) => {
        console.error(error);
      });

      

  }
  saveImage(){

  }

}
