// import React from "react";
import { TodoProps } from "./TodoType";

const Todo = (props: TodoProps) => {
  const { id, title } = props.todo;

  const handleDeleteTodo = (id: string) => {
    props.onDeleteTodo(id);
  };

  return (
    <article className="todo">
      <h4>{id}</h4>
      <h3>{title}</h3>
      <button
        onClick={() => {
          handleDeleteTodo(id);
        }}
      >
        Delete Todo
      </button>
    </article>
  );
};

export default Todo;
