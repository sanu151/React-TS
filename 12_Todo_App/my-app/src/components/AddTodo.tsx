import { useState } from "react";
import { AddTodoProps } from "./TodoType";

const AddTodo = (props: AddTodoProps) => {
  const [newTitle, setNewTitle] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime().toString(),
      title: newTitle,
    };
    props.onAddTodo(newTodo);
    setNewTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titleTodo">Title : </label>
          <input
            type="text"
            id="titleTodo"
            name="titleTodo"
            onChange={handleChange}
            value={newTitle}
            required
          />
          <button type="submit">Add Todo</button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
