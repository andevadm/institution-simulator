// staffSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { StaffInterface } from '../model/staff';
import { Job, AdminJob } from '../model/jobs';
import { ID } from "../model/root";

const initialState = [{
  id: 1,
  name: 'John Placeman',
  job: AdminJob.HeadGeneral,
  department: 1,
  taskList: [ 1 ], // if all tasks are completed, the routine 'prepare to work' status is displayed
  hireDate: Date.now()
}] as StaffInterface[];

// Slice
export const staffSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {
    addStaff: (state, action: PayloadAction<[string, Job, ID]>) => {
      const id: ID = (state.length > 0) ? state[state.length - 1].id + 1 : 1;
      const [name, job, department] = action.payload;
      const newStaff: StaffInterface = {
        id,
        name,
        job,
        department,
        taskList: [],
        hireDate: Date.now()
      };
      state.push(newStaff);
      // ? How to add person to a department staffList
    },
    fireStaff: (state, action: PayloadAction<ID>) => {
      const index = state.findIndex(element => element.id === action.payload );
      if (index > -1) state.splice(index, 1);
    },
    resetStaff: state => initialState
  }
});

// Actions
export const { addStaff, fireStaff, resetStaff } = staffSlice.actions;

// Selectors
export const selectStaffList = (state: RootState) => state.staff;
export const selectStaffByID = (state: RootState, id: ID) => state.staff.find( person => person.id === id);

// Reducer
export default staffSlice.reducer;