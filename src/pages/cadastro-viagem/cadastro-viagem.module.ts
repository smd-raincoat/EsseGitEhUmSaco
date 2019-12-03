import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroViagemPage } from './cadastro-viagem';

@NgModule({
  declarations: [
    CadastroViagemPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroViagemPage),
  ],
})
export class CadastroViagemPageModule {}
