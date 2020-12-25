// store.ts
// store and initial state

import { configureStore } from '@reduxjs/toolkit';
import departmentReducer from './departmentSlice';
import staffReducer from './staffSlice';
import taskReducer from './taskSlice';
import activeReducer from './activeSlice';
import notificationReducer from './notificationSlice';

import { ElementSelector } from "../model/root";
import { DepartmentInterface } from "../model/departments";
import { StaffInterface } from '../model/staff';
import { TaskInterface } from "../model/tasks";
import { Notification } from "../model/notification";

export interface RootState {
  departments: DepartmentInterface[];
  staff: StaffInterface[];
  tasks: TaskInterface[];
  active: ElementSelector; // selected person, department or institution (default null)
  notification: Notification[]; // notification of current workday
}

export const store = configureStore({
  reducer: {
    staff: staffReducer,
    departments: departmentReducer,
    tasks: taskReducer,
    active: activeReducer,
    notification: notificationReducer
  },
});

/*
export const initialState: RootState = {
  departments: [
    createDepartment('Main Administration'),
    createDepartment('General Science')
  ],
  staff: [],
  taskList: [],
  selected: null
}
*/

/*
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
*/