import { Component, OnInit } from '@angular/core';
import { TodoClass }  from './todo';
import { TodoService }  from './todo.service';

@Component({
    selector: 'todo',
    templateUrl: './app/todo/todo.component.html'
})
export class TodoComponent implements OnInit {

    constructor(
        private todoService: TodoService
    ) { }

    todos_list = this.todoService.getTodos();
    title = 'Hello This is tiel';
    ngOnInit(): void {

    }
}
