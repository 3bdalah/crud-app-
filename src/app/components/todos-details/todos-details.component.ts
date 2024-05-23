import { TodoServiceService } from './../../services/todo-service.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToDo } from '../../Modules/todo';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-todos-details',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './todos-details.component.html',
  styleUrl: './todos-details.component.css',
})
export class TodosDetailsComponent {
  toDo: ToDo | undefined;
  constructor(
    private _route: ActivatedRoute,
    private TodoService: TodoServiceService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getTodo();
    // throw new Error('Method not implemented');
  }

  getTodo() {
    const id = String(this._route.snapshot.paramMap.get('id'));
    this.TodoService.getTodoById(id).subscribe((todo: ToDo) => {
      this.toDo = todo;
    });
  }

  updatetoDo(): void {
    if (this.toDo) {
      this.TodoService.updateToDo(this.toDo).subscribe(() => {
        this._router.navigate(['/todos']);
      });
    }
  }
}
