import React from 'react'
import './TodoList.css'

function TodoList({ children }) {
  return (
    <ul className='items'>
        {children}
    </ul>
  );
}

export { TodoList };