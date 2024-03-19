// src/components/TodoList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addTask,
  toggleTaskStatus,
  deleteTask,
  resetTasks,
} from '../redux/todoSlice';

const TodoList = () => {
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();
  const [newTaskText, setNewTaskText] = useState('');

  const handleAddTask = () => {
    if (newTaskText.trim()) {
      const newTask = { id: Date.now(), text: newTaskText, done: false };
      dispatch(addTask(newTask));
      setNewTaskText(''); // Clear the input field
    }
  };

  const handleToggleTask = (taskId) => {
    dispatch(toggleTaskStatus(taskId));
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleResetTasks = () => {
    dispatch(resetTasks());
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
      />
      <button onClick={handleAddTask}>Add New Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => handleToggleTask(task.id)}
            />
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            {task.text}
          </li>
        ))}
      </ul>
      <button onClick={handleResetTasks}>Reset All Tasks</button>
    </div>
  );
};

export default TodoList;
