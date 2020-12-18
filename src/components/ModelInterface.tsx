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

import React, { FunctionComponent, MouseEvent, SyntheticEvent, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectDepartmentList, addDepartment, resetDepartments } from '../state/departmentSlice';
import { resetStaff } from '../state/staffSlice';
import { resetTasks } from '../state/taskSlice';
import { resetSelect } from '../state/activeSlice';

import '../styles/ModelInterface.scss';

import { JobType } from '../model/jobs';

const NewButtonForm: FunctionComponent<{}> = () => {

  const [jobType, setJobType] = useState(JobType.Admin as JobType);
  const departmentList = useSelector(selectDepartmentList);
  const dispatch = useDispatch();

  function newButtonHandler(event: MouseEvent): void {
    event.preventDefault();
    const inputName = document.getElementById("newName") as HTMLInputElement;
    const inputNameBlock = inputName.parentElement as HTMLElement;
    const namePresent = departmentList.findIndex( element => element.name === inputName.value ) > -1;
    if ( !inputName.value || namePresent ) {
      console.log('Correct name input is necessary');
      inputNameBlock.classList.add('inputError');
    } else {
      dispatch( addDepartment([inputName.value, jobType]) );
      inputNameBlock.classList.remove('inputError');
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
    const inputNameBlock = target.parentElement as HTMLElement;
    inputNameBlock.className = '';
  }

  return (
    <form className="NewButtonForm">
      <div className="newButtonBlock">
        <button id="newButton" onClick={newButtonHandler} >
          New Department
        </button>
        <div className="inputBlock">
          <input id="newName" onChange={inputChangeHandler} placeholder="Input a new name..." required />
        </div>
        <ul className="jobType" onClick={jobTypeSelect}>
          <li id="adminJob" className={ (jobType === JobType.Admin) ? 'selected' : ''}>
            { JobType.Admin }
          </li>
          <li id="workerJob" className={ (jobType === JobType.Work) ? 'selected' : ''}>
            { JobType.Work }
          </li>
        </ul>
      </div>
      <div className="otherButtons">

      </div>  
    </form>
  )

}

const GeneralButtons: FunctionComponent<{}> = () => {

  const dispatch = useDispatch();

  function resetButtonHandler(event: MouseEvent): void {
    event.preventDefault();
    dispatch(resetDepartments());
    dispatch(resetStaff());
    dispatch(resetTasks());
    dispatch(resetSelect());
    console.log('Reset button click');
  }

  return (
    <div className="GeneralButtons">
      <button id="resetButton" onClick={resetButtonHandler} >
          Reset Model
      </button>
    </div>
  )

}

const ModelInterface: FunctionComponent<{}> = () => {
  return (
    <div className="ModelInterface">
      <h3>Select your action</h3>
      <NewButtonForm />
      <GeneralButtons />
    </div>
  )
}

export default ModelInterface;