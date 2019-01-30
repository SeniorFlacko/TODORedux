import { Component, OnInit } from '@angular/core';
import { filtrosValidos, SetFiltroAction } from 'src/app/filter/filter.actions';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  public filtros: filtrosValidos[] = ['todos','completados', 'pendientes'];
  public active_filtro: filtrosValidos;
  public tareas_pendientes: number;

  constructor(public store: Store<AppState>) {
    this.store.subscribe(state => {
      this.active_filtro = state.filtro;
      this.tareas_pendientes = state.todos.filter(todo => !todo.completado).length;
    });
   }

  ngOnInit() {
  }

  setFilter(filtro: filtrosValidos){
    this.store.dispatch(new SetFiltroAction(filtro));
  }

}
