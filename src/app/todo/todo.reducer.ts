import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';

const estadoInicial: Todo[] = [];

function todoReducer(state = estadoInicial, action:fromTodo.Acciones){
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