import type { TodoItemProps } from "./types";

export const TodoItem = (props: TodoItemProps) => {
  return (
    <div class='todo-item'>
      <input
        type="checkbox"
        checked={props.completed}
        onChange={(event) => {
          console.log({todo: props.id, checked: event.currentTarget.checked });
          props.onChange({ id: props.id, completed: event.currentTarget.checked });
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
