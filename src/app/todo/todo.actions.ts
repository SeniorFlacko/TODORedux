import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar Todo';
export const TOGGLE_TODO = '[TODO] Toggle Todo';
export const EDITAR_TODO = '[TODO] Editar Todo';
export const BORRAR_TODO = '[TODO] Borrar Todo';
export const TOGGLE_ALL_TODO = '[TODO] Toggle All Todo';
export const BORRAR_TODOS_COMPLETADOS = '[TODO] Borrar todos completados';

export class AgregarTodoAction implements Action{
    type: string = AGREGAR_TODO;
    constructor(public payload:string){}
}

export class ToggleTodoAction implements Action{
    type: string = TOGGLE_TODO;
    constructor(public id: number){}
}

export class EditarTodoAction implements Action{
    type: string = EDITAR_TODO;
    constructor( public id: number, public texto: string ){}
}

export class BorrarTodoAction implements Action{
    type: string = BORRAR_TODO;
    constructor( public id: number ){}
}

export class ToggleAllTodoAction implements Action{
    type: string = TOGGLE_ALL_TODO;
    constructor(public completado: boolean){}
}

export class BorrarTodosCompletadosAction implements Action{
    type: string = BORRAR_TODOS_COMPLETADOS;
    constructor(){}
}

export type Acciones =  AgregarTodoAction 
                        | ToggleTodoAction 
                        | EditarTodoAction 
                        | BorrarTodoAction 
                        | ToggleAllTodoAction
                        | BorrarTodosCompletadosAction;