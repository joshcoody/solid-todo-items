import type { TodoItemProps } from "./types";

export const TodoItem = (props: TodoItemProps) => {
  return (
    <div data-testid="todo-item">
      <input
        data-testid="todo-checkbox"
        type="checkbox"
        checked={props.completed}
        onChange={(event) => {
          props.onChange({
            id: props.id,
            completed: event.currentTarget.checked,
          });
        }}
      />
      <span
        style={{ "text-decoration": props.completed ? "line-through" : "none" }}
      >
        {props.text}
      </span>
    </div>
  );
};
