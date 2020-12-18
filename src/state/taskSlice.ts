// taskSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { TaskInterface, Objective, createTask } from '../model/tasks';
import { ID } from "../model/root";

const initialState = [] as TaskInterface[];

// Slice
export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<[Objective, ID]>) => {
      const newTask = createTask(...action.payload);
      state.push(newTask);
    },
    removeTask: (state, action: PayloadAction<ID>) => {
      const index = state.findIndex(element => element.id === action.payload );
      state.splice(index, 1);
    },
    resetTasks: state => initialState
  }
})

// Actions
export const { addTask, removeTask, resetTasks } = taskSlice.actions;

// Selector
export const selectTaskList = (state: RootState) => state.tasks;

// Reducer
export default taskSlice.reducer;