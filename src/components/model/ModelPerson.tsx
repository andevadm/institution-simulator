// ModelPerson.tsx
// Component with person view

import React, { FunctionComponent } from 'react';

import { useSelector } from 'react-redux';
import { selectStaffByID } from '../../state/staffSlice';
import { RootState } from '../../state/store';

import { ID } from "../../model/root";
import { getExperience } from "../../model/staff";

import '../../styles/model/ModelPerson.scss';
import ModelTask from './ModelTask';

interface PersonProps {
  id: ID;
}

const ModelPerson: FunctionComponent<PersonProps> = ({id}) => {

  const person = useSelector( (state: RootState) => selectStaffByID(state, id) );

  return (   
    <div className="Person">
      {
        ( person === undefined ) ?
        <h5>Person <strong># {id}</strong> is not present</h5> :
        <>
          <h5 className="person-name">{person.name}</h5>
          <div className="person-job">{person.job}, worked for {getExperience(person.hireDate)} min</div>
          <div className="person-tasklist">
            <ul>
            {
              ( person.taskList.length > 0 ) ?
              person.taskList.map((taskID) => 
                <li key={taskID}>
                  <ModelTask id={taskID} />
                </li>
              ) : 
              <p>no tasks</p> 
            }
            </ul>
          </div>            
        </>
      }
    </div>
  )
}

export default ModelPerson;