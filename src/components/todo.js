import React from 'react'

function Todo({ todo }) {

  return (
    <div data-testid={todo.id}>{ todo.completed ? <p>{todo.title}</p> : <strike>{todo.title}</strike> }</div>
  )
}

export default Todo