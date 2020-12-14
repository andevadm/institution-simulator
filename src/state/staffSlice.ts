// staffSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Person } from '../model/staff';

// Slice
export const staffSlice = createSlice({
  name: 'staff',
  initialState: [] as Person[], // import from initialState.staff creates Range Error: Maximum call stack size exceeded
  reducers: {
    hire: (state, action: PayloadAction<Person>) => {
      state.push(action.payload)
    },
    dismiss: (state, action: PayloadAction<Person>) => {
      state.splice(state.indexOf(action.payload), 1)
    }
  }
})

// Actions
export const { hire, dismiss } = staffSlice.actions;

// Selector
export const selectStaffList = (state: RootState) => state.staff;

// Reducer
export default staffSlice.reducer;