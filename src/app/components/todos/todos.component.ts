import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../Modules/todo';
import { TodoServiceService } from '../../services/todo-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  todos: ToDo[] = [];
  newToDo: ToDo = {} as ToDo;
  // newtTask: any = ;
  constructor(private todoServices: TodoServiceService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoServices.getTodos().subscribe((x: ToDo[]) => {
      this.todos = x;
    });
  }
  createToDo(): void {
    this.todoServices.createTodo(this.newToDo).subscribe((todo: ToDo) => {
      this.todos.push(todo);
      // Reset the newToDo object
      this.newToDo = {} as ToDo;
    });
  }

  deleteTodo(todoId: string): void {
    this.todoServices.deleteToDo(todoId).subscribe(() => {
      this.todos = this.todos.filter((todo) => todo.id !== todoId);
    });
  }
}
