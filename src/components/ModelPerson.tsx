// ModelPerson.tsx
// Component with person view

import React, { FunctionComponent } from 'react';

import '../styles/ModelPerson.scss';

import { testState } from '../state/initial-state';

interface PersonProps {
  name: string;
}

const ModelPerson: FunctionComponent<PersonProps> = ({name}) => {
  const person = testState.staff.find((element) => element.name === name);
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