import { TodosProps } from "./TodoType";
import Todo from "./Todo";

const Todos = (props: TodosProps) => {
  return (
    <section className="todos">
      {props.todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onDeleteTodo={props.onDeleteTodo} />
      ))}
    </section>
  );
};

export default Todos;
