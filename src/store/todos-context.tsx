import React, { createContext, useState } from "react";
import Todo from "../models/Todo";

type TodosContextType = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

const initialState: TodosContextType = {
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
};

export const TodosContext = createContext<TodosContextType>(initialState);

type Props = { children?: React.ReactNode };

export default function TodosContextProvider({ children }: Props) {
  const [items, setItems] = useState<Todo[]>([]);

  const addTodo = (todoText: string) => {
    console.log("addTodo");
    setItems((prev) => prev.concat(new Todo(todoText)));
  };

  const removeTodo = (todoId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== todoId));
  };

  const ctxValue: TodosContextType = {
    items,
    addTodo,
    removeTodo,
  };

  return (
    <TodosContext.Provider value={ctxValue}>{children}</TodosContext.Provider>
  );
}
