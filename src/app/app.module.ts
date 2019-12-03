import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import{HttpModule} from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ViagemPage} from '../pages/viagem/viagem';
import {CadastroAnotacaoPage} from '../pages/cadastro-anotacao/cadastro-anotacao';
import {AnotacaoPage} from '../pages/anotacao/anotacao';
import { Camera } from '@ionic-native/camera';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CadastroViagemPage} from '../pages/cadastro-viagem/cadastro-viagem';
import { ChecklistPage } from '../pages/checklist/checklist';
import { AddPage } from '../pages/add/add';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { File } from '@ionic-native/file';
import { MaterialDeApoioPage } from '../pages/material-de-apoio/material-de-apoio';
import { AnotacoesPage } from '../pages/anotacoes/anotacoes';
import {AlterarViagemPage} from '../pages/alterar-viagem/alterar-viagem';
import { IonicStorageModule } from '@ionic/storage';
import { PhotosProvider } from '../providers/photos/photos';
import { GalleryPage } from '../pages/gallery/gallery';
import {CadastrarPage} from '../pages/cadastrar/cadastrar'



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CadastroViagemPage,
    ViagemPage,
    ChecklistPage,
    AddPage,
    CadastroAnotacaoPage,
    AnotacaoPage,
    MaterialDeApoioPage,
    AnotacoesPage,
    AlterarViagemPage,
    GalleryPage,
    CadastrarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CadastroViagemPage,
    ViagemPage,
    ChecklistPage,
    AddPage,
    CadastroAnotacaoPage,
    AnotacaoPage,
    MaterialDeApoioPage,
    AnotacoesPage,
    AlterarViagemPage,
    GalleryPage, 
    CadastrarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DocumentViewer,
    File,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PhotosProvider
  ]
})
export class AppModule {}
