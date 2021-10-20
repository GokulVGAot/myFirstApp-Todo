import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  newTodo="";
  @Output() addTodoEmitter = new EventEmitter<{todo:string}>()

  constructor() { }

  ngOnInit(): void {
  }

  onAddNewTask(){
    this.addTodoEmitter.emit({todo:this.newTodo})
    this.newTodo=""
    
  }
}
