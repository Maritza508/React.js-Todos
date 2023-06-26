import './TodoItem.css'
import { CompleteIcon } from '../CompleteIcon/CompleteIcon';
import { DeleteIcon } from '../DeleteIcon/DeleteIcon';

function TodoItem(props) {
    return (
      <li className={`TodoItem ${props.completed && "li-item--completed " }`}>
        <CompleteIcon 
        completed={props.completed}
        onCompleted={props.onCompleted}
        />
        
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete "}`}>{props.text}</p>

        <DeleteIcon
        onDeleted={props.onDeleted}        
        />        
     </li>
    );
  }

export { TodoItem }