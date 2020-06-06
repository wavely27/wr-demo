import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './App'
import './style/global.css'
import './utils/browser'

ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
)
