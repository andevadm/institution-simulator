// Model.tsx
// Container of institution model

import React, { FunctionComponent } from 'react';

import '../styles/Model.scss';
import ModelDepartment from './ModelDepartment';
import ModelInterface from './ModelInterface';

import { testState } from '../state/initial-state';


const Model: FunctionComponent<{}> = () => {
  return (
    <div className="Model">
      <h2>Institution Model</h2>
      {
        testState.departments.map((element) => 
          <ModelDepartment name={element.name} key={element.name} />
        )
      }
      <ModelInterface />
    </div>
  )
}

export default Model;