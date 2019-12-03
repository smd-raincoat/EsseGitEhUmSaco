import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViagemPage } from './viagem';

@NgModule({
  declarations: [
    ViagemPage,
  ],
  imports: [
    IonicPageModule.forChild(ViagemPage),
  ],
})
export class ViagemPageModule {}
