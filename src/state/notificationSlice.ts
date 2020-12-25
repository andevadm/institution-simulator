// notificationSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Notification, Message, MessageType } from "../model/notification";

const initialState = [
  {
    type: 'action',
    content: Message.newInstitution
  }
] as Notification[];

// Slice
export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<[MessageType, Message]>) => {
      const [type, content] = action.payload;
      const notification: Notification = {
        type,
        content,
        checked: false
      };
      state.push(notification);
    },
    checkMessage: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (Number.isInteger(index) && index > -1 && index < state.length) { 
        state[index].checked = true;
      } else {
        console.log('! notification/checkMessage: index of a message is wrong');
      }
    },
    clearNotification: state => [] as Notification[],
    resetNotification: state => initialState
  }
});

// Actions
export const { addMessage, checkMessage, clearNotification, resetNotification } = notificationSlice.actions;

// Selector
export const selectNotification = (state: RootState) => state.notification;

// Reducer
export default notificationSlice.reducer;