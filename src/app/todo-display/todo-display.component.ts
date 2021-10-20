import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-display',
  templateUrl: './todo-display.component.html',
  styleUrls: ['./todo-display.component.css']
})
export class TodoDisplayComponent implements OnInit {

  @Input() item !:{todo:string}
  constructor() { }

  ngOnInit(): void {
  }
  onClickItem(){
    console.log("hi")
  }

}
