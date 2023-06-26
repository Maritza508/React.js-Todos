import React from "react";
import TodoIcon from "../TodoIcon/TodoIcon"

function DeleteIcon({ onDeleted }) {
    return (
        <TodoIcon
            type="delete"
            color="gray"
            onClick={onDeleted}
        />
    );
}

export { DeleteIcon }