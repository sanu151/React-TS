export type TodoType = {
  id: string;
  title: string;
};

export type TodosProps = {
  todos: TodoType[];
  onDeleteTodo: (id: string) => void;
};

export type TodoProps = {
  todo: TodoType;
  onDeleteTodo: (id: string) => void;
};

export type AddTodoProps = {
  onAddTodo: (todo: TodoType) => void;
  newTodo: TodoType;
};
