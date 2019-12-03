import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnotacaoPage } from './anotacao';

@NgModule({
  declarations: [
    AnotacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(AnotacaoPage),
  ],
})
export class AnotacaoPageModule {}
