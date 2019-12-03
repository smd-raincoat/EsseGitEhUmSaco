import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PhotosProvider } from '../../providers/photos/photos';

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  photos: any;
  imagem: string = '';
  imagens: string;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private photoservice: PhotosProvider, private camera: Camera, 
    private alertCtrl: AlertController, public toastController: ToastController) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }
  

}
