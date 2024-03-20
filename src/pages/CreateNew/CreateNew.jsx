import React, { useState } from 'react';
import './CreateNew.scss'; // Import the styles
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../../redux/todoSlice';

const CreateNew = () => {
  const todos = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate_to = useNavigate();

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    dispatch(addTask({ title, description }));

    setTitle('');
    setDescription('');
    navigate_to('/');
  };

  return (
    <div className="create-new-container">
      <form onSubmit={handleAddTask}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            required
          />
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default CreateNew;
