import React, { PropsWithChildren } from "react";
import Todo from "../models/Todo";

const Todos: React.FC<PropsWithChildren<{ items: Todo[] }>> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;

// should I really use React.FC at this point?
// export default function Todos(props: PropsWithChildren) {
//   return <ul>{props.children}</ul>;
// }
