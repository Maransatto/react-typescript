import { PropsWithChildren, useRef } from "react";
import classes from "./NewTodo.module.css";

type Props = PropsWithChildren<{ onAddTodo: (text: string) => void }>;

export default function NewTodo({ onAddTodo }: Props) {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      //throw an erro
      return;
    }

    onAddTodo(enteredText);
  }

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" name="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
}
