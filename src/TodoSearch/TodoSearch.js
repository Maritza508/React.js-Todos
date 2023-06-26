import React from 'react'
import './TodoSearch.css'
import searchIcon from '../icons/busqueda.png'
import {TodoContext } from '../TodoContext/TodoContext'
// import react from 'react'

function TodoSearch() {
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

  return (
    <div className='div-input'>
      <input placeholder="Search task..." 
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      />
      <img className='search-img' src={searchIcon} alt='Search icon'></img>
    </div>
  );
}

export  { TodoSearch }