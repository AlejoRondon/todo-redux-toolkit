// src/redux/todoSlice.js
import { createSlice,nanoid} from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: 1, title: 'Clean bathroom', description: 'created on initialState', done: false },
    { id: 2, title: 'Walk dog', description: 'created on initialState', done: false },
    { id: 3, title: 'Smile', description: 'created on initialState', done: true },
    { id: 4, title: 'Be happy!', description: 'created on initialState', done: true }

  ], 
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action) => {
      let new_task = {id: nanoid(), ...action.payload, done: false}
      console.log(new_task)
      state.tasks.push(new_task); // Add a new task to the array
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
      state.tasks = [...initialState.tasks]; // Clear the tasks array
    },
  },
});

export const { addTask, toggleTaskStatus, deleteTask, resetTasks } =
  todoSlice.actions;
export default todoSlice.reducer;
