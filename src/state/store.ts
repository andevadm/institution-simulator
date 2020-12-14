// store.ts
// store and initial state

import { configureStore } from '@reduxjs/toolkit';
import staffReducer from './staffSlice';
import departmentReducer from './departmentSlice';

import { Department } from "../model/departments";
import { Person, Administrator, Worker } from '../model/staff';
import { WorkerJob, AdminJob } from "../model/jobs";
import { Task } from "../model/tasks";

export const store = configureStore({
  reducer: {
    staff: staffReducer,
    departments: departmentReducer
  },
});

export interface RootState {
  departments: Department[];
  staff: Person[];
  taskList: Task[];
  selected: Person | Department | null;
}

export const initialState: RootState = {
  departments: [
    new Department('Main Administartion'),
    new Department('General Science')
  ],
  staff: [],
  taskList: [],
  selected: null
}

const testState = {
  departments: initialState.departments,
  staff: [
    new Administrator('Director Jones', AdminJob.HeadGeneral, initialState.departments[0]),
    new Worker('Worker Smith', WorkerJob.Research, initialState.departments[1])
  ],
  taskList: []
}
testState.departments[0].staffList.push(testState.staff[0]);
testState.departments[1].staffList.push(testState.staff[1]);
export { testState }