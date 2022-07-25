export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export type UpdateTodoInput = Omit<Todo, "text">;

export type UpdateTodoFunc = (nextTodo: UpdateTodoInput) => void;
