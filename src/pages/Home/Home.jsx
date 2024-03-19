// components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import TodoCard from '../../components/TodoCard/TodoCard';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTaskStatus, deleteTask } from '../../redux/todoSlice';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate_to = useNavigate();
  const todos = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();

  const handleOnViewClick = (e, taskId) => {
    console.log('handleOnViewClick');
    e.stopPropagation();
    navigate_to(`/details/${taskId}`);
  };

  const handleToggleTask = (e, taskId) => {
    console.log('handleToggleTask');
    dispatch(toggleTaskStatus(taskId));
  };

  const handleDeleteTask = (e, taskId) => {
    console.log('handleDeleteTask');
    dispatch(deleteTask(taskId));
  };

  return (
    <div>
      <div className="todo-list">
        {todos.length !== 0 ? (
          todos.map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              onCardClick={handleToggleTask}
              onDeleteBtnClick={handleDeleteTask}
              onViewBtnClick={handleOnViewClick}
            />
          ))
        ) : (
          <p>Go to 'Create New' tab and Create the first one</p>
        )}
      </div>
    </div>
  );
};

export default Home;
