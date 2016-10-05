import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoComponent }  from './todo/todo.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'todo/list',
        component: TodoComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
