import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';

const atodo = new Todo('Derrotar a loki');
atodo.completado = true;  

const estadoInicial: Todo[] = [
    new Todo('Vencer a thanos'),
    atodo
];

export function todoReducer(state = estadoInicial, action:fromTodo.Acciones){
    switch (action.type) {
        
        case fromTodo.AGREGAR_TODO:
            const todo = new Todo(action.payload);
            
            return [ 
                ...state,
                todo
            ];

        default:
            return state;
    }
}