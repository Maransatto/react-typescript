import { PropsWithChildren } from "react";
import classes from "./TodoItem.module.css";

type Props = PropsWithChildren<{
  text: string;
  onTodoItemClick: () => void;
}>;

export default function TodoItem({ text, onTodoItemClick }: Props) {
  return (
    <li className={classes.item} onClick={onTodoItemClick}>
      {text}
    </li>
  );
}
