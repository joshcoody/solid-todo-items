export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export type UpdateTodoInput = Partial<Todo> & { id: string };

export type UpdateTodoFunc = (nextTodo: UpdateTodoInput) => void;
