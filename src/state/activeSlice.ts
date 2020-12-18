// activeSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { ElementSelector } from "../model/root";

// default null is active whole Institution
const initialState = {
  type: 'Institution',
  id: 0
} as ElementSelector;

// Slice
export const activeSlice = createSlice({
  name: 'active',
  initialState,
  reducers: {
    newSelect: (state, action: PayloadAction<ElementSelector>) => action.payload,
    resetSelect: state => initialState
  }
});

// Actions
export const { newSelect, resetSelect } = activeSlice.actions;

// Selector
export const selectActive = (state: RootState) => state.active;

// Reducer
export default activeSlice.reducer;