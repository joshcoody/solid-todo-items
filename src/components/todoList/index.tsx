import { Component, For, createSignal } from "solid-js";
import { Todo, UpdateTodoFunc } from "~/types";
import { TodoItem } from "~/components/todoItem";
import { v4 } from "uuid";

export const TodoList: Component = () => {
  let input!: HTMLInputElement;
  const [todoItems, setTodoItems] = createSignal<Todo[]>([]);
  const addTodo = (text: string) => {
    const id = v4();
    setTodoItems([...todoItems(), { id, text, completed: false }]);
  };
  const changeTodo: UpdateTodoFunc = (nextTodo) => {
    setTodoItems(
      todoItems().map((todo) =>
        todo.id === nextTodo.id
          ? { ...todo, completed: nextTodo.completed }
          : todo
      )
    );
  };

  return (
    <>
      <div class="add-todo-wrapper">
        <input
          data-testid="todo-input"
          placeholder="new todo here"
          ref={input}
        />
        <button
          data-testid="add-todo"
          onClick={() => {
            if (!input.value.trim()) return;
            addTodo(input.value);
            input.value = "";
          }}
        >
          Add Todo
        </button>
      </div>
      <div class="todo-list">
        <For each={todoItems()}>
          {(todo) => <TodoItem {...todo} onChange={changeTodo} />}
        </For>
      </div>
    </>
  );
};
