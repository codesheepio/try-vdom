import React from 'react'

const TodoList = ({todos}) => (
  <ul>
    { todos.map((todo) => {
      return <li>{todo}</li>
    }) }
  </ul>
)

export default TodoList