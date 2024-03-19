// src/redux/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [{ id: 1, title: 'default', description: 'default', done: false }], // An array to store our tasks
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload); // Add a new task to the array
    },
    toggleTaskStatus: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.done = !task.done; // Toggle the task's status
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload); // Remove the task
    },
    resetTasks: (state) => {
      state.tasks = [...initialState]; // Clear the tasks array
    },
  },
});

export const { addTask, toggleTaskStatus, deleteTask, resetTasks } =
  todoSlice.actions;
export default todoSlice.reducer;
