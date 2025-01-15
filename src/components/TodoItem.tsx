import { PropsWithChildren } from "react";
import classes from "./TodoItem.module.css";

type Props = PropsWithChildren<{
  text: string;
}>;

export default function TodoItem({ text }: Props) {
  return <li className={classes.item}>{text}</li>;
}
