import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../../redux/todoSlice";

const Todo = (props) => {
  const { todo, onDelete } = props;
  const dispatch = useDispatch();

  const [editedTodo, setEditedTodo] = useState('');

  return (
    <div>
      {!editedTodo && 
        <>
          <span> {todo.name} </span>
          <button onClick={() => onDelete(todo.id)}> delete </button>
          <button onClick={() => setEditedTodo(todo.name)}> edit </button>
        </>
      }
      {editedTodo &&
        <>
          <input type="text" value={editedTodo} onChange={(e) => setEditedTodo(e.target.value)} />
          <button onClick={() => {
            dispatch(editTodo({ id: todo.id, name: editedTodo }))
            setEditedTodo('');
          }}> Save </button>
        </>
      }
    </div>
  );
}
 
export default Todo;