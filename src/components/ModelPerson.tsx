// ModelPerson.tsx
// Component with person view

import React, { FunctionComponent } from 'react';

import { useSelector } from 'react-redux';
import { selectStaffList } from '../state/staffSlice';

import { ID } from "../model/root";
import { getExperience } from "../model/staff";

import '../styles/ModelPerson.scss';

interface PersonProps {
  id: ID;
}

const ModelPerson: FunctionComponent<PersonProps> = ({id}) => {

  const staffList = useSelector(selectStaffList);
  const person = staffList.find((element) => element.id === id);
  console.log('Selector test in ModelPerson - staffList');
  console.log(staffList);

  return (   
    <div className="Person">
      {
        ( person === undefined ) ?
        <h3>Person <strong>{id}</strong> is not present</h3> :
        <>
          <h3>{person.name}</h3>
          <p>{person.job}, worked for {getExperience(person)} min</p>
        </>
      }
    </div>
  )
}

export default ModelPerson;