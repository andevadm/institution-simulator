// Model.tsx
// Container of institution model

import React, { FunctionComponent } from 'react';

import { useSelector } from 'react-redux';
import { selectDepartmentList } from '../state/departmentSlice';

import '../styles/Model.scss';
import ModelDepartment from './ModelDepartment';
import ModelInterface from './ModelInterface';

const Model: FunctionComponent<{}> = () => {

 const departmentList = useSelector( selectDepartmentList );
 console.log('Selector test in Model - departmentList');
 console.log(departmentList);

  return (
    <div className="Model">
      <h2>Institution Model</h2>
      <ModelInterface />
      { 
        departmentList.map((element) => 
          <ModelDepartment name={element.name} key={element.id} />
        )
      }
    </div>
  );

}

export default Model;