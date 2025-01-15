import React, { PropsWithChildren } from "react";

const Todos: React.FC<PropsWithChildren<{ items: string[] }>> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;

// should I really use React.FC at this point?
// export default function Todos(props: PropsWithChildren) {
//   return <ul>{props.children}</ul>;
// }
