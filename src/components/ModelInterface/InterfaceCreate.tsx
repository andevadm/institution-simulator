// InterfaceCreate.tsx
// Form to create a new elemet of the model

import React, { FunctionComponent, MouseEvent, SyntheticEvent, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectDepartmentList, addDepartment } from '../../state/departmentSlice';

import { JobType } from '../../model/jobs';
import '../../styles/InterfaceCreate.scss';

const InterfaceCreate: FunctionComponent<{}> = () => {

  const [jobType, setJobType] = useState(JobType.Admin as JobType);
  const departmentList = useSelector(selectDepartmentList);
  const dispatch = useDispatch();

  function newButtonHandler(event: MouseEvent): void {
    event.preventDefault();
    const inputName = document.getElementById("newName") as HTMLInputElement;
    // const inputNameBlock = inputName.parentElement as HTMLElement;
    const namePresent = departmentList.findIndex( element => element.name === inputName.value ) > -1;
    if ( !inputName.value || namePresent ) {
      console.log('Correct name input is necessary');
      inputName.classList.add('warning');
    } else {
      dispatch( addDepartment([inputName.value, jobType]) );
    }
    console.log('New button click');
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
            New Department
          </button>
        </div>
        <div className="create-input-block">
          <input id="newName" onChange={inputChangeHandler} placeholder="Input a new name..." required />
        </div>
      </div>
      <ul className="create-job-type" onClick={jobTypeSelect}>
        <li id="adminJob" className={ (jobType === JobType.Admin) ? 'selected' : 'interactive'}>
          { JobType.Admin }
        </li>
        <li id="workerJob" className={ (jobType === JobType.Work) ? 'selected' : 'interactive'}>
          { JobType.Work }
        </li>
      </ul>
    </form>
  )

}

export default InterfaceCreate;