import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { EditTodoComponent } from '../edit-todo/edit-todo.component';
import { Todo } from '../models/todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];

  constructor(
    private todoService: TodoService,
    private modal: NgbModal) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe((res: Todo[]) => {
      this.todos = res;
    })
  }

  editModal(todo: Todo) {
    const modalRef = this.modal.open(EditTodoComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });

    modalRef.componentInstance.id = todo.id;
  }

  deleteTodo(todo: Todo) {
    if (confirm('Are you sure to delete this todo?') == true) {
      this.todoService.deleteTodo(todo).then(() =>
       console.log('delete successful'));
    }
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
