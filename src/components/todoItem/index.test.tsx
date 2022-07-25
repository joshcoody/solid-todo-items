import { describe, expect, test, vi } from "vitest";
import { render, fireEvent } from "solid-testing-library";
import { TodoItem } from "./index";

describe("<TodoItem />", () => {
  test("it will render a checkbox and texts", async () => {
    const props = {
      id: "test",
      completed: true,
      text: "hello world",
      onChange: vi.fn(),
    };
    const { getByText, findByRole, unmount } = render(() => (
      <TodoItem {...props} />
    ));
    const checkbox = (await findByRole("checkbox")) as HTMLInputElement;

    expect(checkbox).toBeInTheDocument();
    expect(getByText(props.text)).toBeInTheDocument();
    unmount();
  });

  test("it will call the onChange when clicking on the checkbox", async () => {
    const props = {
      id: "test",
      completed: false,
      text: "hello world",
      onChange: vi.fn(),
    };
    const { findByRole, unmount } = render(() => <TodoItem {...props} />);
    const checkbox = (await findByRole("checkbox")) as HTMLInputElement;

    expect(checkbox).toBeInTheDocument();
    expect(checkbox.checked).toBe(false);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
    expect(props.onChange).toHaveBeenCalled();
    unmount();
  });
});
