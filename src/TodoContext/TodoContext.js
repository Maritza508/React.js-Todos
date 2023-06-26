import React from "react";
import {useLocalStorage} from '../hooks/useLocalStorage'


const TodoContext = React.createContext();

function TodoProvider({ children }) {

    const { item: todos,
        saveItem: saveTodos,
        loading,
        error } = useLocalStorage('TODOS_V1', []);
   
     const [searchValue, setSearchValue] = React.useState('');
     const [openModal, setOpenModal] = React.useState(false);
   
     const completedTodos = todos.filter(todo => !!todo.completed).length;
     const totalTodos = todos.length;
   
     const searchedTodos = todos.filter((todo) => {
       const todoText = todo.text.toLowerCase();
       const searchText = searchValue.toLocaleLowerCase();
       return todoText.includes(searchText);
     });
   
   const completeTodo = (text) => {
     const newTodos = [...todos];
     const todoIndex = newTodos.findIndex(
       (todo) => todo.text === text
     );
     newTodos[todoIndex].completed = true;
     saveTodos(newTodos);
     //console.log(todoIndex);
   };
   
   const deletedTodo = (text) => {
     const newTodos = [...todos];
     const todoIndex = newTodos.findIndex(
       (todo) => todo.text === text
     );
     newTodos.splice(todoIndex, 1);
     saveTodos(newTodos);
   };
   
   //Lo hice yo si todos los todos estan readis
   const isCompletedTodos = todos.filter(item => item.completed === true).length === todos.length;   

    return (        
        <TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            isCompletedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deletedTodo,
            loading,
            error,
            openModal, 
            setOpenModal,            
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }