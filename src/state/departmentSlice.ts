// departmentSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { DepartmentInterface } from '../model/departments';
import { JobType } from '../model/jobs';
import { ID } from "../model/root";

const initialState = [{
  id: 1,
  name: 'Main Administration',
  type: JobType.Admin,
  head: 1,
  staffList: [ 1 ]
}] as DepartmentInterface[];

// Slice
export const departmentSlice = createSlice({
  name: 'departments',
  initialState, // import initialState from other module can cause errors
  reducers: {
    addDepartment: (state, action: PayloadAction<[string, JobType]>) => {
      const id: ID = (state.length > 0) ? state[state.length - 1].id + 1 : 1;
      const [name, type] = action.payload;
      const newDepartment: DepartmentInterface = {
        id,
        name,
        type,
        head: null,
        staffList: []
      };
      state.push(newDepartment);
    },
    removeDepartment: (state, action: PayloadAction<ID>) => {
      const index = state.findIndex(element => element.id === action.payload );
      if (index > -1) state.splice(index, 1);
    },
    resetDepartments: state => initialState
  }
})

// Actions
export const { addDepartment, removeDepartment, resetDepartments } = departmentSlice.actions;

// Selectors
export const selectDepartmentList = (state: RootState) => state.departments;
export const selectDepartmentByID = (state: RootState, id: ID) => state.departments.find( department => department.id === id);

// Reducer
export default departmentSlice.reducer;