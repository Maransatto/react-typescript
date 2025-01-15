import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/Todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    // setTodos((prev) => [...prev, new Todo(todoText)]);
    setTodos((prev) => prev.concat(new Todo(todoText)));
  };

  const removeItemHandler = (id: string) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveItem={removeItemHandler} />
    </div>
  );
}

export default App;
