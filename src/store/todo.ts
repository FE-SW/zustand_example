import create from "zustand";
import { devtools, persist } from "zustand/middleware";

import { Todo } from "@type/todo";

interface TodoState {
  todoList: Array<Todo>;
  finishedList: Array<Todo>;
  searchWord: string;
  addTodo: (todo: Todo) => void;
  removeTodo: (todo: Todo) => void;
  searchTodo: (word: string) => void;
  finishTodo: (todo: Todo) => void;
}

const initialTodoList: Array<Todo> = [
  {
    id: 1,
    title: "식사",
    comment: "아침 먹기",
  },
  {
    id: 2,
    title: "운동",
    comment: "축구 하기",
  },
];

const initailFinishedList: Array<Todo> = [];

export const useTodoStore = create<TodoState>()(
  devtools(
    persist(
      (set, get) => ({
        todoList: initialTodoList,
        finishedList: initailFinishedList,
        searchWord: "",
        addTodo: (todo: Todo) => {
          set((state: TodoState) => ({
            todoList: [...state.todoList, todo],
          }));
        },
        removeTodo: (todo: Todo) => {
          const filteredList = get().todoList.filter((t) => t.id !== todo.id);
          set({ todoList: filteredList });
        },
        searchTodo: (word: string) => {
          set({ searchWord: word });
        },
        finishTodo: (todo: Todo) => {
          const filteredList = get().todoList.filter((t) => t.id !== todo.id);
          set({
            todoList: filteredList,
            finishedList: [...get().finishedList, todo],
          });
        },
      }),
      {
        name: "todoStore",
      }
    )
  )
);
