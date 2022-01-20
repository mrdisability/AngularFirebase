import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from '../models/todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}

// todos: Todo[] | undefined;
//   todoSubscription: Subscription | any;

//   constructor(private todoService: TodoService) {}

//   ngOnInit() {
//     this.todoSubscription = this.todoService.todosChanged.subscribe(
//       todos => (this.todos = todos)
//     );
//     this.todoService.fetchTodos();
//   }

//   ngOnDestroy() {
//     this.todoSubscription.unsubscribe();
//   }
