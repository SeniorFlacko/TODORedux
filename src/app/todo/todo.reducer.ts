import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';



const estadoInicial: Todo[] = [
    new Todo('Comer Frutas'),
    new Todo('Comer Verduras')
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
        
        case fromTodo.TOGGLE_ALL_TODO:
            accion = <fromTodo.ToggleAllTodoAction> action;
            return state.map(todoItem =>{
                return {
                    ...todoItem,
                    completado: accion.completado
                }
            });

        case fromTodo.BORRAR_TODOS_COMPLETADOS:
            accion = <fromTodo.BorrarTodosCompletadosAction> action;
            return state.filter(todoItem => !todoItem.completado);

        default:
            return state;
    }
}