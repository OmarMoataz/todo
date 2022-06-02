import Todo from "../components/Todo";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "../redux/todoSlice";
import { useState } from "react";

const ListingPage = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const [todoToBeAdded, setTodoToBeAdded] = useState('');

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  }

  return (
    <>
      {todos.map((todo) => (
        <Todo onDelete={handleDelete} key={todo.id} todo={todo} />
      ))}
      <input type='text' onChange={(e) => setTodoToBeAdded(e.target.value)}/> 
      <button onClick={() => dispatch(addTodo({ id: todos.length, name: todoToBeAdded }))}> Add </button>
    </>
  );
};

export default ListingPage;
