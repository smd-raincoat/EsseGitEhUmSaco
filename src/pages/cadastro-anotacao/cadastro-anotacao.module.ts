import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroAnotacaoPage } from './cadastro-anotacao';

@NgModule({
  declarations: [
    CadastroAnotacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroAnotacaoPage),
  ],
})
export class CadastroAnotacaoPageModule {}
