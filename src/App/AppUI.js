import React from 'react'
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton'
import { TodosLoading } from '../TodosLoading/TodosLoading'
import { TodosError } from '../TodosError/TodosError'
import { EmptyTodos } from '../EmptyTodos/EmptyTodos'
import { TodoContext } from '../TodoContext/TodoContext';
import { Modal } from '../Modal/Modal'

function AppUI() {    
  const { 
    searchedTodos,
    completeTodo,
    deletedTodo,
    loading,
    error,
    openModal, 
    setOpenModal 
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
  
        <TodoList>
          {loading && <TodosLoading />}
          {error && <TodosError />}
          {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}

            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onCompleted={() => completeTodo(todo.text)}
                onDeleted={() => deletedTodo(todo.text)}
              />
            ))}
        </TodoList>
     
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

      {openModal && (
        <Modal>
        lalalallalalalalal
        </Modal>
      )}

    </>
  );    
}

export {AppUI};