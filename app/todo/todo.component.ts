import { Component, OnInit } from '@angular/core';
import { TodoClass }  from './todo';
import { TodoService }  from './todo.service';

@Component({
    selector: 'todo',
    templateUrl: './app/todo/todo.component.html'
})
export class TodoComponent implements OnInit {

    /**Constructore */
    constructor(
        private todoService: TodoService
    ) { }

    /** Variable declation */
    displayEditTextbox = false;
    selectedTodo: TodoClass;
    todosList = new Array;

    /** ngOnInit function */
    ngOnInit(): void {
        //Call getTodos service
        this.todosList = this.todoService.getTodos();
    }

    /** onSelect function */
    onSelect(todo: TodoClass) {
        this.selectedTodo = todo;
        this.displayEditTextbox = true;
    }

    /** updateTodo function */
    updateTodo() {
        //Call updateTodo service
        this.todoService.updateTodo(this.selectedTodo);
        this.displayEditTextbox = false;
    }

    deleteTodo(todo:TodoClass){
        //Call deleteTodo service
        this.todoService.deleteTodo(todo);
    }
}
