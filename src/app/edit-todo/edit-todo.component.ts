import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Todo } from '../models/todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  @Input() id: string | undefined;
  todo!: Todo;

  constructor(
    private todoService: TodoService,
    public activeModal: NgbActiveModal)
     { }

  ngOnInit() {
    if (this.id)
      this.todoService.getTodoByID(this.id).subscribe(res => {
        this.todo = res
      });
  }

  onUpdate() {
    this.todoService.updateTodo(this.todo).then(() => {
      this.activeModal.close();
      console.log('Data add successfully');
    })
  }

  setCompleted(todo: Todo, completed: boolean) {
    this.todoService.modifyTodoCompleted(todo, completed)
  }

}
