import { Injectable } from '@angular/core';
import { TodoClass } from './todo';

@Injectable()
export class TodoService {

    TODOS: TodoClass[] = [
        { id: 11, name: 'Mr. Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
    ];

    /**getTodos function */
    getTodos() {
        return this.TODOS;
    }

    /** Add todo */
    addTodo(todoName: string) {
        let n = this.TODOS.length;
        this.TODOS.push({
            id: n + 1,
            name: todoName
        });
    }


    /**updateTodo function */
    updateTodo(todo: TodoClass) {
        let n = this.TODOS.length;
        for (let i = 0; i < n; i++) {
            if (this.TODOS[i].id == todo.id) {
                this.TODOS[i].name = todo.name;
            }
        }
    }

    /**deleteTodo function */
    deleteTodo(todoID: TodoClass) {
        var index = this.TODOS.findIndex(function (o) {
            return o.id === todoID.id;
        })
        this.TODOS.splice(index, 1);
    }


}

