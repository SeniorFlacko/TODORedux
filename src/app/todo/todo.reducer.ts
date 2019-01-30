import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';



const estadoInicial: Todo[] = [
    new Todo('Vencer a thanos'),
    new Todo('Derrotar a loki')
];

export function todoReducer(state = estadoInicial, action:fromTodo.Acciones){
    let accion;
    switch (action.type) {
        
        case fromTodo.AGREGAR_TODO:
            accion = <fromTodo.AgregarTodoAction> action;
            const todo = new Todo(accion.payload);
            
            return [ 
                ...state,
                todo
            ];

        case fromTodo.TOGGLE_TODO:
            accion = <fromTodo.ToggleTodoAction> action;
            
            
            return state.map(todoItem =>{
                if (todoItem.id === accion.id) {
                    return {
                        ...todoItem,
                        completado: !todoItem.completado,
                    }
                }
                else{
                    return todoItem
                }
            });

        case fromTodo.EDITAR_TODO:
            accion = <fromTodo.EditarTodoAction> action;
            
            
            return state.map(todoItem =>{
                if (todoItem.id === accion.id) {
                    return {
                        ...todoItem,
                        texto: accion.texto
                    }
                }
                else{
                    return todoItem
                }
            });

        case fromTodo.BORRAR_TODO:
            accion = <fromTodo.BorrarTodoAction> action;
            return state.filter(todoItem => todoItem.id != accion.id);

        default:
            return state;
    }
}