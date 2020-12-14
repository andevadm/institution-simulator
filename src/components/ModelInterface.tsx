// ModelInterface.tsx
// Components of the model interface
// Contains: ModelInterface, NewButtonForm

/*

Todo first:
- Institution actions
- Select department
- New worker
- Select worker
- Dismiss worker

Sections:
- Selected Item: Person, Department or Whole Institution
- Properties of the selected item
- Actions with selected item
- Notifications about action results
If nothing selected - hide interface

Institution actions:
- New Department
- Show statistics (Info page)
- Reset Model

Department actions:
- New Worker
- Delete Department

Person actions:
- New task
- Select task from list
- Dismiss

*/

import React, { FunctionComponent, MouseEvent, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectDepartmentList, add, remove } from '../state/departmentSlice';

import '../styles/ModelInterface.scss';

import { JobType } from '../model/jobs';
import { Department } from '../model/departments';

const NewButtonForm: FunctionComponent<{}> = () => {

  const [jobType, setJobType] = useState("adminJob" as "adminJob" | "workerJob");
  const departmentList = useSelector(selectDepartmentList);
  const dispatch = useDispatch();

  function newButtonHandler(event: MouseEvent): void {
    event.preventDefault();
    const inputName = document.getElementById("newName") as HTMLInputElement;
    const namePresent = departmentList.findIndex( element => element.name === inputName.value ) > -1;
    if ( !inputName.value || namePresent ) {
      console.log('Name input is necessary');
      inputName.classList.add('inputError');
    } else {
      const newDepartment = new Department(inputName.value);
      dispatch(add(newDepartment));
      inputName.classList.remove('inputError');
    }
    console.log('New button click');
  }

  function jobTypeSelect(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.id === "adminJob" || target.id === "workerJob") {
      setJobType(target.id)
    }; 
    console.log('jobType select click');
    console.log(target.id);
  }

  return (
    <form className="NewButtonForm">
      <div className="newButtonBlock">
        <button id="newButton" onClick={newButtonHandler} >
          New Department
        </button>
        <input id="newName" type="text" placeholder="Input a new name..." required />
        <ul className="jobType" onClick={jobTypeSelect}>
          <li id="adminJob" className={ (jobType === "adminJob") ? 'selected' : ''}>
            { JobType.Admin }
          </li>
          <li id="workerJob" className={ (jobType === "workerJob") ? 'selected' : ''}>
            { JobType.Work }
          </li>
        </ul>
      </div>
      <div className="otherButtons">

      </div>  
    </form>
  )

}

const ModelInterface: FunctionComponent<{}> = () => {
  return (
    <div className="ModelInterface">
      <h3>Select your action</h3>
      <NewButtonForm />
    </div>
  )
}

export default ModelInterface;