import React from "react";
import { } from '../TodosLoading/TodosLoading.css'
import { FaBeer } from 'react-icons/fa';


function TodosLoading({ onDeleted }) {
    return (

    //  <h3 className="rotate-element"> Lets go for a <FaBeer />? </h3>
      <div className="padre">
        <p className="loader"></p>
      </div>
    );
}

export { TodosLoading }

