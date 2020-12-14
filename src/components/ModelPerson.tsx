// ModelPerson.tsx
// Component with person view

import React, { FunctionComponent } from 'react';

import { useSelector } from 'react-redux';
import { selectStaffList } from '../state/staffSlice';

import '../styles/ModelPerson.scss';

interface PersonProps {
  name: string;
}

const ModelPerson: FunctionComponent<PersonProps> = ({name}) => {

  const staffList = useSelector(selectStaffList);
  const person = staffList.find((element) => element.name === name);
  console.log('Selector test in ModelPerson - staffList');
  console.log(staffList);

  return (   
    <div className="Person">
      {
        ( person === undefined ) ?
        <h3>Person <strong>{name}</strong> is not present</h3> :
        <>
          <h3>{person.name}</h3>
          <p>{person.job}, worked for {person.getExperience()} min</p>
        </>
      }
    </div>
  )
}

export default ModelPerson;