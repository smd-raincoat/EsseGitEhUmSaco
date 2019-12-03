import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  public todoList = JSON.parse(localStorage.getItem("todos"));
  public todoItem: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.todoList = JSON.parse(localStorage.getItem("todos"));
        if(!this.todoList) {
            this.todoList = [];
        }
        this.todoItem = "";
  }

  

  save() {
    if(this.todoItem != "") {
        this.todoList.push(this.todoItem);
        localStorage.setItem("todos", JSON.stringify(this.todoList));
        this.navCtrl.pop();
    }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
    console.log(this.todoList);
  }

}

