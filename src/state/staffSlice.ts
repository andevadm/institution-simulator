// staffSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { StaffInterface, createStaff } from '../model/staff';
import { Job } from '../model/jobs';
import { ID } from "../model/root";

const initialState = [] as StaffInterface[];

// Slice
export const staffSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {
    addStaff: (state, action: PayloadAction<[string, Job, ID]>) => {
      const newStaff = createStaff(...action.payload);
      state.push(newStaff);
    },
    fireStaff: (state, action: PayloadAction<ID>) => {
      const index = state.findIndex(element => element.id === action.payload );
      state.splice(index, 1);
    },
    resetStaff: state => initialState
  }
})

// Actions
export const { addStaff, fireStaff, resetStaff } = staffSlice.actions;

// Selector
export const selectStaffList = (state: RootState) => state.staff;

// Reducer
export default staffSlice.reducer;