import React from 'react';
import { useParams } from 'react-router-dom';
import './TodoDetails.scss';
import { useSelector, useDispatch } from 'react-redux';

const TodoDetails = () => {
  const todos = useSelector((state) => state.todo.tasks);
  const { id } = useParams();
  const todo = todos.find((todo) => todo.id === parseInt(id));

  return (
    <div className="todo-details-container">
      {todo ? (
        <div className="todo-details">
          <h3 className="todo-id">Id: {todo.id}</h3>
          <h3 className="todo-title">Title: {todo.title}</h3>
          <p className="todo-description">Description: {todo.description}</p>
          <p className="todo-description">
            Done: {todo.done ? 'true' : 'false'}
          </p>
        </div>
      ) : (
        <p className="todo-not-found">{`I wasn't possible to find a todo with id: ${id}`}</p>
      )}
    </div>
  );
};

export default TodoDetails;
