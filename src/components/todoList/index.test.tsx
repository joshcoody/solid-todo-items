import { describe, expect, test } from 'vitest';
import { render } from 'solid-testing-library';
import { TodoList } from './index';

describe('<TodoItem />', () => {
  test('it will render a checkbox and texts', async () => {
    const { getByTestId, unmount } = render(() => <TodoList />);
    const input = getByTestId('todo-input') as HTMLInputElement;

    expect(input).toBeInTheDocument();
    unmount();
  });
});
