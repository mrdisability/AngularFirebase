import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject, Subscription } from 'rxjs';
import { Todo } from './models/todo.model';
import { map } from "rxjs/operators";
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc, serverTimestamp
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private firestore: Firestore) { }

  addTodo(todo: any) {
    const todosRef = collection(this.firestore, 'todos');

    const newTodo = {
      todo: todo,
      completed: false,
      created: serverTimestamp()
    };

    return addDoc(todosRef, newTodo);
  }

  getTodos(): Observable<Todo[]> {
    const todosRef = collection(this.firestore, 'todos');
    return collectionData(todosRef, { idField: 'id' }) as Observable<Todo[]>;
  }

  deleteTodo(todo: Todo) {
    const todoDocRef = doc(this.firestore, `todos/${todo.id}`);
    return deleteDoc(todoDocRef);
  }

  getTodoByID(id: string) {
    const todoRef = doc(this.firestore, `todos/${id}`);
    return docData(todoRef, { idField: 'id' }) as Observable<Todo>;
  }

  updateTodo(todo: Todo) {
    const todoDocRef = doc(this.firestore, `todos/${todo.id}`);
    return setDoc(todoDocRef, todo);
  }

  modifyTodoCompleted(todo: Todo, completed: boolean) {
    const todoDocRef = doc(this.firestore, `todos/${todo.id}`);
    return updateDoc(todoDocRef, { completed: completed });
  }

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
