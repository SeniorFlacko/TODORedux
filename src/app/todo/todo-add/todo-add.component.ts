import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { FormControl, Validators } from '@angular/forms';
import { AgregarTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor(private store:Store<AppState>) {
    this.store.subscribe(state =>{
      // console.log(state.todos);
    });

    this.txtInput = new FormControl('', Validators.required);
    
  }

  ngOnInit() {
  }


  addTodo($event){

    if (this.txtInput.invalid) {
      return;
    }

    const txt:string = this.txtInput.value;
    this.store.dispatch(new AgregarTodoAction(txt));
    this.txtInput.reset();
  }
}
