import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar Todo';

export class AgregarTodo implements Action{
    type: string = AGREGAR_TODO;
    constructor(public payload:string){}
}

export type Acciones = AgregarTodo;