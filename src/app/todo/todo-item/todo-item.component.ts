import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { ToggleTodoAction, EditarTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  
  @Input() todo: Todo;
  checkField : FormControl;
  txtInput: FormControl;
  editando: boolean;
  @ViewChild('inputFisico') inputFisico: ElementRef;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.checkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.checkField.valueChanges.subscribe(() => {
      const accion = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(accion);
    });
  }

  editar(){
    this.editando = true;
    setTimeout(() => {
      this.inputFisico.nativeElement.select();
    }, 1);
  }

  terminarEditando(){
    this.editando = false;
  }

  terminarEditandoEnter(){
    if(this.txtInput.invalid){
      return;
    }

    this.store.dispatch(new EditarTodoAction(this.todo.id, this.txtInput.value));
  }

}
