import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }) {
  return (
    <button
      className="CreateTodoButton"
      onClick={
        () => {
          setOpenModal(state => !state);
        }
      }
    >☁</button>
  );
}

export { CreateTodoButton };








// import React from 'react'
// import './CreateTodoButton.css'
// import addIcon from '../icons/heart(1).png'
// // import addIcon from '../icons/anadir-simbolo.png'

// function CreateTodoButton({ setOpenModal }) {
//   return (
//     <a href='/'>
//       <img className='add-img' src={addIcon} alt='add icon' 
//         onClick={() => {
//           setOpenModal(state => !state);
//         }
//       }
      
//       ></img>
    
//     </a>
//   )
// }

// export { CreateTodoButton }


