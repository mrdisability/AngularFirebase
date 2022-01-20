import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../models/todo.model';
import { TodoService } from '../todo.service';
import { serverTimestamp } from 'firebase/firestore';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo = ""

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.todoService.addTodo(form.controls['todo'].value).
      then(() => form.reset());
  }

}
