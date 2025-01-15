import { useRef } from "react";

export default function NewTodo() {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      //throw an erro
      return;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" name="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
}
