import { Component } from '@angular/core';
import { NavController, AlertController, reorderArray, ToastController } from 'ionic-angular';
import { TodoProvider } from '../../providers/todo/todo';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public todos = [];
  public reorderIsEnabled = false;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController,
    private todoService: TodoProvider, private toastCtrl: ToastController) {
      this.todos = this.todoService.getTodos();
  }

  openTodoAlert() {
    let addTodoAlert = this.alertCtrl.create({
      title: "Add a Todo",
      subTitle: "Add a Todo list one by one",
      message: "Enter your Todo",
      inputs: [
        {
          type: "text",
          name: "addTodoInput",
          placeholder: "Add Todo"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Add",
          handler: (inputData) => {
            let todoText = inputData.addTodoInput;
            this.todoService.addTodo(todoText);

              addTodoAlert.onDidDismiss(()=> {  //display toast after added todo list
                let toast = this.toastCtrl.create({
                  message: 'Todo Added',
                  duration: 3000,
                  position: 'middle'
                });
                toast.onDidDismiss(() => {
                  console.log('Dismissed toast');
                });
                toast.present();
              })

          }
        }
      ]
    });
    addTodoAlert.present();
  }

  toggleReorder() {
    this.reorderIsEnabled = !this.reorderIsEnabled;
  }

  reorderItems(indexes) {
    this.todos = reorderArray(this.todos, indexes);
  }

  // gotoArchivePage() {
  //   this.navCtrl.push('ArchivedTodosPage');
  // }

  deleteTodo(index) {
    this.todoService.deletetodo(index);
  }

  edittodoo(index) {
    let editTodoAlert = this.alertCtrl.create({
      title: "Edit a Todo",
      subTitle: "Edit a Todo list",
      message: "Edit your Todo",
      inputs: [
        {
          type: "text",
          name: "editTodoInput",
          value: this.todos[index] //preset the value w/ current value
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Save",
          handler: (inputData) => {
            let todoText = inputData.editTodoInput;
            this.todoService.editTodo(todoText, index);

              editTodoAlert.onDidDismiss(()=> {  //display toast after edited todo list
                let toast = this.toastCtrl.create({
                  message: 'Todo Edited',
                  duration: 3000,
                  position: 'bottom'
                });
                toast.onDidDismiss(() => {
                  console.log('Dismissed toast');
                });
                toast.present();
              })

          }
        }
      ]
    });
    editTodoAlert.present();
  }
}
