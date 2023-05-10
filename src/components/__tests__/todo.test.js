import { render, screen, cleanup } from '@testing-library/react'
import Todo from '../todo'

afterEach(() => { cleanup() })

test('should render non-completed todo', () => {

    const todo = { id: 1, title: 'wash dishes', completed: false }
    render(<Todo todo={todo} />);
    const todoElement = screen.getByTestId(todo.id)

    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('wash dishes');
})

test('should render completed todo', () => {

    const todo = { id: 2, title: 'clean the house', completed: true }
    render(<Todo todo={todo} />);
    const todoElement = screen.getByTestId(todo.id)

    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('clean the house');
})

