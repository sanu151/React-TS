import { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { TodoType } from "./components/TodoType";

const todoData = [
  { id: "1", title: "Learn React" },
  { id: "2", title: "Learn TypeScript" },
  { id: "3", title: "Learn Node.js" },
];

function App() {
  const [todos, setTodos] = useState(todoData);

  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const addTodo = (newTodo: TodoType) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <h1>Todo App</h1>
      <AddTodo
        onAddTodo={addTodo}
        newTodo={{
          id: "",
          title: "",
        }}
      />
      <Todos todos={todos} onDeleteTodo={deleteTodo} />
    </>
  );
}

export default App;
