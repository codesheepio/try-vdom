import React from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button'
import TodoList from './components/TodoList'

const todos = ['aaa', 'bbb', 'ccc']
ReactDOM.render(
  <TodoList todos={todos} />,
  document.getElementById('react-root')
)