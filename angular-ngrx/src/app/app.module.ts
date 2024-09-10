import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter/counter.reducer';
import { CounterComponent } from './components/molecules/counter/counter.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { todoReducer } from './store/todo/todo.reducer';
import { TodoComponent } from './components/molecules/todo/todo.component';

const routes: Routes = [];

@NgModule({
  declarations: [AppComponent, CounterComponent, TodoComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ counter: counterReducer, todos: todoReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
