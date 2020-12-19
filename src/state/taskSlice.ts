// taskSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { TaskInterface, Objective, GeneralObjective, Status } from '../model/tasks';
import { ID } from "../model/root";

const initialState = [{
  id: 1,
  objective: GeneralObjective.Routine,
  executor: 1,
  status: Status.Work
}] as TaskInterface[];

// Slice
export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<[Objective, ID]>) => {
      const id: ID = (state.length > 0) ? state[state.length - 1].id + 1 : 1;
      const [objective, executor] = action.payload;
      const newTask: TaskInterface = {
        id,
        objective,
        executor,
        status: Status.Wait
      };
      state.push(newTask);
      // ? How to add task to a person taskList
    },
    removeTask: (state, action: PayloadAction<ID>) => {
      const index = state.findIndex(element => element.id === action.payload );
      if (index > -1) state.splice(index, 1);
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