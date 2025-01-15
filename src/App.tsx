import Todos from "./components/Todos";
import Todo from "./models/Todo";

function App() {
  const todos: Todo[] = [new Todo("Learn React"), new Todo("Learn Typescript")];
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
