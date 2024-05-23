// import { Component } from "@angular/core";
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodosDetailsComponent } from './components/todos-details/todos-details.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'home' },
  { path: 'about', component: AboutComponent, title: 'about' },
  { path: 'todos', component: TodosComponent, title: 'todo list' },
  {
    path: 'todos/:id',
    component: TodosDetailsComponent,
    title: 'to do details',
  },
  {
    path: 'todos/:id',
    component: TodosDetailsComponent,
    title: 'to do details',
  },
  {
    path: 'todos/:id',
    component: TodosDetailsComponent,
    title: 'to do details',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'to do details',
  },
];
