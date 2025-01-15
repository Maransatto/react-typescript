import { PropsWithChildren } from "react";
import Todo from "../models/Todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

type Props = PropsWithChildren<{
  items: Todo[];
  onRemoveItem: (id: string) => void;
}>;

export default function Todos({ items, onRemoveItem }: Props) {
  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          // onTodoItemClick={() => onRemoveItem(item.id)} // just another approach
          onTodoItemClick={onRemoveItem.bind(null, item.id)}
        />
      ))}
    </ul>
  );
}
