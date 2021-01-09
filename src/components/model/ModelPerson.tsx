// ModelPerson.tsx
// Component with person view

import React, { FunctionComponent } from 'react';

import { useSelector } from 'react-redux';
import { selectStaffList } from '../../state/staffSlice';
import { selectTaskList } from '../../state/taskSlice';

import { ID } from "../../model/root";
import { getExperience } from "../../model/staff";

import '../../styles/model/ModelPerson.scss';

interface PersonProps {
  id: ID;
}

const ModelPerson: FunctionComponent<PersonProps> = ({id}) => {

  const staffList = useSelector(selectStaffList);
  const taskList = useSelector(selectTaskList);
  const person = staffList.find((element) => element.id === id);

  return (   
    <div className="Person">
      {
        ( person === undefined ) ?
        <h5>Person <strong># {id}</strong> is not present</h5> :
        <>
          <h5>{person.name}</h5>
          <p>{person.job}, worked for {getExperience(person)} min</p>
          <div className="TaskList">
            <strong>Tasks:</strong>
            <ul>
            {
              ( person.taskList.length > 0 ) ?
              person.taskList.map((taskID) => {
                const task = taskList.find(task => task.id === taskID);
                if (task === undefined) return '';
                // const taskStage = task.history[task.history.length - 1];
                return <li key={task.id}>
                        ID: {task.id}, Objective: {task.objective}, Status: {task.status}
                      </li>
              }) : 
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