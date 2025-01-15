import { PropsWithChildren } from "react";
import Todo from "../models/Todo";
import TodoItem from "./TodoItem";

type Props = PropsWithChildren<{ items: Todo[] }>;

export default function Todos({ items }: Props) {
  return (
    <ul>
      {items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
}
