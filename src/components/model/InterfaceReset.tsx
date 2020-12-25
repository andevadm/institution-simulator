// InterfaceReset.tsx
// Model reset button

import React, { FunctionComponent, MouseEvent } from 'react';

import { useDispatch } from 'react-redux';
import { resetDepartments } from '../../state/departmentSlice';
import { resetStaff } from '../../state/staffSlice';
import { resetTasks } from '../../state/taskSlice';
import { resetSelect } from '../../state/activeSlice';
import { resetNotification } from '../../state/notificationSlice';

import '../../styles/model/InterfaceReset.scss';

const InterfaceReset: FunctionComponent<{}> = () => {

  const dispatch = useDispatch();

  function resetButtonHandler(event: MouseEvent): void {
    event.preventDefault();
    dispatch(resetDepartments());
    dispatch(resetStaff());
    dispatch(resetTasks());
    dispatch(resetSelect());
    dispatch(resetNotification());
    console.log('Reset the institution');
  }

  return (
    <div className="InterfaceReset">
      <button id="resetButton" onClick={resetButtonHandler} >
        Reset Model
      </button>
    </div>   
  )

}

export default InterfaceReset;