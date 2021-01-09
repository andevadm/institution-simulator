// taskSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { TaskInterface, TaskStage, GlobalObjective, LocalObjective, Status } from '../model/tasks';
import { ID } from "../model/root";

const initialState = [{
  id: 1, 
  objective: GlobalObjective.Manage,
  author: 1,
  status: Status.Wait,
  duration: 0,
  history: [{
    objective: LocalObjective.Prepare,
    executor: 1, 
    status: Status.Wait,
    duration: 0 
  }] as TaskStage[]
}] as TaskInterface[];

// Slice
export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<[GlobalObjective, ID]>) => {
      const id: ID = (state.length > 0) ? state[state.length - 1].id + 1 : 1;
      const [objective, author] = action.payload;
      const newTask: TaskInterface = {
        id,
        objective,
        author,
        status: Status.Wait,
        duration: 0,
        history: [{
          objective: LocalObjective.Prepare,
          executor: author, 
          status: Status.Wait,
          duration: 0 
        }] as TaskStage[]
      };
      state.push(newTask);
      // ? How to add task to a person taskList
    },
    manageTask: (state, action: PayloadAction<[ID, TaskStage]>) => {
      const [id, obtainedTaskStage] = action.payload;
      const index = state.findIndex(element => element.id === id );
      // manage task history
      if (index > -1) {
        const task: TaskInterface = state[index];
        const lastTaskStage: TaskStage = task.history[task.history.length - 1];
        const isNewStage: boolean = 
          ( !lastTaskStage ) ||
          ( lastTaskStage.objective !== obtainedTaskStage.objective ) ||
          ( lastTaskStage.executor !== obtainedTaskStage.executor );
        if (isNewStage) {
          // add a new stage
          task.history.push(obtainedTaskStage)
        } else {
          // modify existed stage
          lastTaskStage.status = obtainedTaskStage.status;
          lastTaskStage.duration++;
        }
        // manage task proceeding
        task.duration++;
        if ( obtainedTaskStage.status === Status.Solve) {
          /* solve entire task or move to a next stage

          */
          task.status = Status.Solve // simple decision for one-stage task
        } else {
          // fail of entire task is included
          task.status = obtainedTaskStage.status
        }  
      }
    },
    removeTask: (state, action: PayloadAction<ID>) => {
      const index = state.findIndex(element => element.id === action.payload );
      if (index > -1) state.splice(index, 1);
    },
    resetTasks: state => initialState
  }
})

// Actions
export const { addTask, manageTask, removeTask, resetTasks } = taskSlice.actions;

// Selectors
// select all tasks
export const selectTaskList = (state: RootState) => state.tasks;
// select not completed tasks
export const selectPendingTasks = (state: RootState) =>
  state.tasks.filter( task =>  ![Status.Solve, Status.Fail].includes(task.status) ); 

// Reducer
export default taskSlice.reducer;