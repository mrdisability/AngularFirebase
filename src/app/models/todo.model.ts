import firebase from "firebase/compat";

export interface Todo {
  id: string;
  todo: string;
  completed: boolean;
  created: firebase.firestore.Timestamp
}
