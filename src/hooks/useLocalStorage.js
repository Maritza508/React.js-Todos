import React from "react";


//Custom Hooks 
function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

  


    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
    
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }
    
          setLoading(false);        
        } catch (error) {
          setLoading(false);        
          setError(true);
        }
      }, 1000);
    }, []);


  
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
  
      setItem(newItem);
    };
    return { item, saveItem, loading, error };
  }

  export {useLocalStorage};


  // localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Bañar a nieves ', completed: false },
//   { text: 'Curso de React Para ser Rich ', completed: true },
//   { text: 'Curso de React ', completed: false },
//   { text: 'tomar juguito ', completed: false },
//   { text: 'Terminar de hacer el pastel para mama ', completed: false },
//   { text: 'Terminar de hacer el pastel para mama y bajar a comprar mas huevos ', completed: true },
//   { text: 'Organizar mi Notion ', completed: true },
//   { text: 'LALALALAL mi Notion ', completed: true },
//   { text: 'lalala', completed: true },
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));