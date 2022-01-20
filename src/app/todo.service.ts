import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subject, Subscription } from 'rxjs';
import { Todo } from './models/todo.model';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TodoService {



}

// todoChanged = new Subject<Todo>();
//   todosChanged = new Subject<Todo[]>();

//   private todos: Todo[] = [];
//   private selectedTodo: Todo | any;
//   private fbSubs: Subscription[] = [];

//   constructor(private db: AngularFirestore) {}

//   fetchTodos() {
//     this.fbSubs.push(this.db
//       .collection('todos')
//       .snapshotChanges()
//       .pipe(map((docArray: any[]) => {
//         return docArray.map(doc => {
//           return {
//             id: doc.payload.doc.id,
//             todo: doc.payload.doc.data()['todo'],
//             completed: doc.payload.doc.data()['completed']
//           };
//         });
//       }))
//       .subscribe((todos: Todo[] | any) => {
//         this.todos = todos;
//         this.todosChanged.next([...this.todos]);
//       }));
//   }

//   selectTodo(selectedId: string) {
//     this.selectedTodo = this.todos.find(
//       ex => ex.id === selectedId
//     );
//     this.todoChanged.next({ ...this.selectedTodo });
//   }

//   getSelectedTodo() {
//     return { ...this.selectedTodo };
//   }

//   cancelSubscriptions() {
//     this.fbSubs.forEach(sub => sub.unsubscribe());
//   }

//   private addDataToDatabase(todo: Todo) {
//     this.db.collection('todos').add(todo);
//   }
