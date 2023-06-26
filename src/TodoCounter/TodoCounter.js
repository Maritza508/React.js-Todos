
import React from 'react';
import {TodoContext } from '../TodoContext/TodoContext'
import './TodoCounter.css'



// { total, completed }
function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);

  return (
    <div className='container-titles'>
      <h3>My task:  </h3>
      <h4>Completd {completedTodos} To {totalTodos} TODOS</h4>
    </div>
  );
}




export { TodoCounter } 