import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo';
  Todos: any[] = [];
  todoCreated(todoData: { todo: string }) {
    this.Todos.push({ todo: todoData.todo });
  }

  onClickTodo(index: number) {
    this.Todos.splice(index, 1);
  }
}
