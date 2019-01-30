import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
    this.checkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.checkField.valueChanges.subscribe(value => {
      console.log(value);
      
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

}
