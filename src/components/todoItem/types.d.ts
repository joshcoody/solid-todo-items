import { Todo, UpdateTodoFunc } from "../../types";

export interface TodoItemProps extends Todo {
  onChange: UpdateTodoFunc;
}
