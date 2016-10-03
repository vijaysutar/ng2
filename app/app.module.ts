import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';

import { TodoComponent }  from './todo/todo.component';
import { TodoService }  from './todo/todo.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    TodoComponent
  ],
  providers:[
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
