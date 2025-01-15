import { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

export default function Todos() {
  const { items, removeTodo } = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          // onTodoItemClick={() => onRemoveItem(item.id)} // just another approach
          onTodoItemClick={removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
}
