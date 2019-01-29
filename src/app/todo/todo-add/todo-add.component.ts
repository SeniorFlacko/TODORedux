import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { AgregarTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  constructor(private store:Store<AppState>) {
    this.store.subscribe(state =>{
      console.log(state.todos);
    });
  }

  ngOnInit() {
  }


  addTodo($event){
    console.log();
    const txt:string = $event.srcElement.value;

    this.store.dispatch(new AgregarTodo(txt));

  }
}
