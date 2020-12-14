// departmentSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Department } from '../model/departments';

// Slice
export const departmentSlice = createSlice({
  name: 'departments',
  initialState: [
    new Department('Main Administartion'), 
    new Department('General Science')
  ] as Department[], // import from initialState.departments creates Range Error: Maximum call stack size exceeded
  reducers: {
    add: (state, action: PayloadAction<Department>) => {
      state.push(action.payload)
    },
    remove: (state, action: PayloadAction<Department>) => {
      state.splice(state.indexOf(action.payload), 1)
    }
  }
})

// Actions
export const { add, remove } = departmentSlice.actions;

// Selector
export const selectDepartmentList = (state: RootState) => state.departments;

// Reducer
export default departmentSlice.reducer;