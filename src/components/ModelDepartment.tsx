// ModelDepartment.tsx
// Component with department view

import React, { FunctionComponent } from 'react';

import { useSelector } from 'react-redux';
import { selectDepartmentList } from '../state/departmentSlice';

import { getHeadName } from "../model/departments";

import '../styles/ModelDepartment.scss';
import ModelPerson from './ModelPerson';

interface DepartmentProps {
  name: string;
}

const ModelDepartment: FunctionComponent<DepartmentProps> = ( {name} ) => {

  const departmentList = useSelector(selectDepartmentList);
  const department = departmentList.find((element) => element.name === name);
  console.log('Selector test in ModelDepartment - department');
  console.log(JSON.stringify(department));

  return (
    <div className="Department">
      {
        ( department === undefined ) ?
        <h3>Department <strong>{name}</strong> is not present</h3> :
        <>
          <h3>{department.name}</h3>
          <div className="DepartmentHead">
            Head: { (department.head) ? getHeadName(department) : 'none' }
          </div> 
          <div className="DepartmentStaff">
            Staff:
            {
              ( department.staffList.length > 0 ) ?
              department.staffList.map((personID) => 
                <ModelPerson id={personID} key={personID} />
              ) : 
              <p>no staff</p> 
            }
          </div>
        </>     
      }     
    </div>
  )
}

export default ModelDepartment;