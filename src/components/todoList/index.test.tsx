import { describe, expect, test } from "vitest";
import { render, fireEvent, waitFor } from "solid-testing-library";
import userEvent from "@testing-library/user-event";
import { TodoList } from "./index";

describe("<TodoItem />", () => {
  test("it will render a checkbox and texts", async () => {
    const { getByTestId, unmount } = render(() => <TodoList />);
    const input = getByTestId("todo-input") as HTMLInputElement;

    expect(input).toBeInTheDocument();
    unmount();
  });

  test("it adds a todo item when you click the add button", async () => {
    const { queryByTestId, getByTestId, unmount } = render(() => <TodoList />);
    const input = getByTestId("todo-input") as HTMLInputElement;
    const button = getByTestId("add-todo") as HTMLButtonElement;

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(queryByTestId("todo-item")).toEqual(null);

    input.focus();

    await userEvent.keyboard("test");
    expect(input.value).toEqual("test");

    fireEvent.click(button);

    await waitFor(() => expect(queryByTestId("todo-item")).not.toEqual(null));

    unmount();
  });

  test("toggles the todo item", async () => {
    const { findByRole, queryByTestId, getByTestId, unmount } = render(() => (
      <TodoList />
    ));
    const input = getByTestId("todo-input") as HTMLInputElement;
    const button = getByTestId("add-todo") as HTMLButtonElement;

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    input.focus();

    await userEvent.keyboard("test");
    expect(input.value).toEqual("test");

    fireEvent.click(button);

    await waitFor(() => expect(queryByTestId("todo-item")).not.toEqual(null));

    const checkbox = (await findByRole("checkbox")) as HTMLInputElement;

    expect(checkbox).toBeInTheDocument();
    expect(checkbox.checked).toBe(false);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);

    unmount();
  });
});
