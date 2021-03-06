// activeSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { ID, ElementType, ElementSelector } from "../model/root";

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
    newSelect: (state, action: PayloadAction<[ElementType, ID]>) => {
      const [elementType, id] = action.payload;
      return {
        type: elementType,
        id
      }
    },
    resetSelect: state => initialState
  }
});

// Actions
export const { newSelect, resetSelect } = activeSlice.actions;

// Selector
export const selectActive = (state: RootState) => state.active;

// Reducer
export default activeSlice.reducer;