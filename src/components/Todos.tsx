import { PropsWithChildren } from "react";
import Todo from "../models/Todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

type Props = PropsWithChildren<{ items: Todo[] }>;

export default function Todos({ items }: Props) {
  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
}
