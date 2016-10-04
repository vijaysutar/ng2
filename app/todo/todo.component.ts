import { Component, OnInit } from '@angular/core';
import { TodoClass }  from './todo';
import { TodoService }  from './todo.service';

@Component({
    moduleId: module.id,
    selector: 'todo',
    templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit {

    /** Variable declation */
    displayEditTextbox: boolean;
    selectedTodo: TodoClass;
    todosList = new Array;
    newTodo: string;

    /**Constructore */
    constructor(
        private todoService: TodoService
    ) {
         this.displayEditTextbox = false;
    }

    /** ngOnInit function */
    ngOnInit(): void {
        // Call getTodos service
        this.todosList = this.todoService.getTodos();
    }

    /** onSelect function */
    onSelect(todo: TodoClass) {
        this.selectedTodo = todo;
        this.displayEditTextbox = true;
    }

    /** Add todo */
    addTodo() {
        this.todoService.addTodo(this.newTodo);
    }

    /** updateTodo function */
    updateTodo() {
        // Call updateTodo service
        this.todoService.updateTodo(this.selectedTodo);
        this.displayEditTextbox = false;
    }

    // Delete todo
    deleteTodo(todo:TodoClass) {
        // Call deleteTodo service
        this.todoService.deleteTodo(todo);
    }

}
