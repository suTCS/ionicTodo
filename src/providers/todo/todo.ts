import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {

  private todos = [];


  constructor(public http: HttpClient) {

  }

  getTodos() {
    return this.todos;
  }

  addTodo(todo) {
    return this.todos.push(todo);
  }

  deletetodo(index) {
    return this.todos.splice(this.todos.indexOf(index), 1);
  }

  editTodo (todo, index) {
    return this.todos[index] = todo;
  }
}
