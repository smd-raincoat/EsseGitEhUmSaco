import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddPage } from '../add/add';


@IonicPage()
@Component({
  selector: 'page-checklist',
  templateUrl: 'checklist.html',
})
export class ChecklistPage {
  
  /*checklist: Array<string> = ['GPS','Oculos','Bússola'];
  newObj(){
    
  }*/

  public todoList = JSON.parse(localStorage.getItem("todos"));
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    
    
  }
  ionViewWillEnter() {
    this.todoList = JSON.parse(localStorage.getItem("todos"));
    if(!this.todoList) {
        this.todoList = [''];
    }
}
  delete(index: number) {
    this.todoList.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todoList));
}
  add() {
  this.navCtrl.push(AddPage);
}

  
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChecklistPage');
    console.log(this.todoList);
  }

}
