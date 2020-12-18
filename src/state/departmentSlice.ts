// departmentSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { DepartmentInterface, createDepartment } from '../model/departments';
import { JobType } from '../model/jobs';
import { ID } from "../model/root";

const initialState = [
  createDepartment('Main Administration', JobType.Admin),
  createDepartment('General Science', JobType.Work)
] as DepartmentInterface[];

// Slice
export const departmentSlice = createSlice({
  name: 'departments',
  initialState, // import initialState from other module can cause errors
  reducers: {
    addDepartment: (state, action: PayloadAction<[string, JobType]>) => {
      const newDepartment = createDepartment(...action.payload);
      state.push(newDepartment);
    },
    removeDepartment: (state, action: PayloadAction<ID>) => {
      const index = state.findIndex(element => element.id === action.payload );
      state.splice(index, 1);
    },
    resetDepartments: state => initialState
  }
})

// Actions
export const { addDepartment, removeDepartment, resetDepartments } = departmentSlice.actions;

// Selector
export const selectDepartmentList = (state: RootState) => state.departments;

// Reducer
export default departmentSlice.reducer;