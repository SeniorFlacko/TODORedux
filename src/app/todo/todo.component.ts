import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { ToggleAllTodoAction } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  private completado: boolean;
  constructor(private store:Store<AppState>) { }

  ngOnInit() {
  }

  toggleAllTodos(){
    this.completado = !this.completado;
    this.store.dispatch(new ToggleAllTodoAction(this.completado));
  }
}
