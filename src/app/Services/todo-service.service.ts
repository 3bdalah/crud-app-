import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from '../Modules/todo';

@Injectable({ providedIn: 'root' })
export class TodoServiceService {
  private apiUrl = 'http://localhost:3000/todos';
  constructor(private _httpClient: HttpClient) {}

  getTodos(): Observable<ToDo[]> {
    return this._httpClient.get<ToDo[]>(this.apiUrl);
  }

  createTodo(todo: ToDo): Observable<ToDo> {
    return this._httpClient.post<ToDo>(this.apiUrl, JSON.stringify(todo));
  }

  getTodoById(id: string): Observable<ToDo> {
    return this._httpClient.get<ToDo>(`${this.apiUrl}/${id}`);
  }

  updateToDo(todo: ToDo): Observable<ToDo> {
    return this._httpClient.put<ToDo>(`${this.apiUrl}/${todo.id}`, todo);
  }

  deleteToDo(todoId: string): Observable<void> {
    return this._httpClient.delete<void>(`${this.apiUrl}/${todoId}`);
  }
}
