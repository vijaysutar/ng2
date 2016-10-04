import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './home.component';

import { TodoComponent }  from './todo/todo.component';
import { TodoService }  from './todo/todo.service';

import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    TodoComponent,
    HomeComponent
  ],
  providers:[
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
