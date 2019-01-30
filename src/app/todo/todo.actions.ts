import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar Todo';
export const TOGGLE_TODO = '[TODO] Toggle Todo';

export class AgregarTodoAction implements Action{
    type: string = AGREGAR_TODO;
    constructor(public payload:string){}
}

export class ToggleTodoAction implements Action{
    type: string = TOGGLE_TODO;
    constructor(public id: number){}
}

export type Acciones = AgregarTodoAction | ToggleTodoAction;