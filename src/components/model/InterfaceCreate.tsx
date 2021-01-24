// InterfaceCreate.tsx
// Form to create a new elemet of the model

import React, { FunctionComponent, MouseEvent, SyntheticEvent, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectActive } from '../../state/activeSlice';
import { selectDepartmentList, addDepartment } from '../../state/departmentSlice';
import { addMessage } from '../../state/notificationSlice';

import { ElementType } from '../../model/root';
import { JobType } from '../../model/jobs';
import { Message } from '../../model/notification';
import '../../styles/model/InterfaceCreate.scss';

interface InterfaceCreateProps {
  elementType: ElementType;
}

const InterfaceCreate: FunctionComponent<InterfaceCreateProps> = ({elementType}) => {

  const [jobType, setJobType] = useState(JobType.Admin as JobType);
  const activeComponent = useSelector(selectActive); // will be used to choose form elements and labels
  const departmentList = useSelector(selectDepartmentList);
  const dispatch = useDispatch();

  function newButtonHandler(event: MouseEvent): void {
    event.preventDefault();
    const newNameInputElement = document.getElementById("newName") as HTMLInputElement;
    // const inputNameBlock = newNameInputElement.parentElement as HTMLElement;
    const namePresent = departmentList.findIndex( element => element.name === newNameInputElement.value ) > -1;
    if ( !newNameInputElement.value || namePresent ) {
      newNameInputElement.classList.add('warning');
      dispatch( addMessage(['error', Message.errorName]) );
    } else {
      dispatch( addDepartment([newNameInputElement.value, jobType]) );
      dispatch( addMessage(['action', Message.newDepartment]) );
    }
  }

  function jobTypeSelect(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    switch (target.id) {
      case "adminJob":
        setJobType(JobType.Admin);
        break;
      case "workerJob": 
        setJobType(JobType.Work);
        break;
      default:
        console.log('Selection is not done');
    };
  }

  function inputChangeHandler(event: SyntheticEvent): void {
    const target = event.target as HTMLInputElement;
    // const inputNameBlock = target.parentElement as HTMLElement;
    target.classList.remove('warning');
  }

  return (
    <form className="InterfaceCreate">
      <div>
        <div className="create-button-block">
          <button id="newButton" onClick={newButtonHandler} >
            New {elementType}
          </button>
        </div>
        <div className="create-input-block">
          <input id="newName" onChange={inputChangeHandler} placeholder="Input a new name..." required />
        </div>
      </div>
      <ul className="create-job-type" onClick={jobTypeSelect}>
        <li id="adminJob" className={ (jobType === JobType.Admin) ? 'selected-total' : 'interactive-button'}>
          { JobType.Admin }
        </li>
        <li id="workerJob" className={ (jobType === JobType.Work) ? 'selected-total' : 'interactive-button'}>
          { JobType.Work }
        </li>
      </ul>
    </form>
  )

}

export default InterfaceCreate;