import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  text: string;
}>;

export default function TodoItem({ text }: Props) {
  return <li>{text}</li>;
}
