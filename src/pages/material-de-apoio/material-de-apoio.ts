import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { File } from '@ionic-native/file';


/**
 * Generated class for the MaterialDeApoioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-material-de-apoio',
  templateUrl: 'material-de-apoio.html',
})
export class MaterialDeApoioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private document: DocumentViewer, private file: File
    , private platform: Platform) {
  }
  
  documentOne(){
    let filePath = this.file.applicationDirectory + 'www/assets';
    
    const options: DocumentViewerOptions = {
      title: 'Pdf 1'
    }
    this.document.viewDocument(filePath + '/diagramasrochas.pdf', 'application/pdf', options);
  

  }
  documentTwo(){
    let filePath = this.file.applicationDirectory + 'www/assets';
    
    const options: DocumentViewerOptions = {
      title: 'Pdf 2'
    }
    this.document.viewDocument(filePath + '/tiposderochas.pdf', 'application/pdf', options);
  

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaterialDeApoioPage');
  }

}

