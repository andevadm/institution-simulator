// ModelDepartment.tsx
// Component with department view

import React, { FunctionComponent } from 'react';

import { useSelector } from 'react-redux';
import { selectDepartmentList } from '../state/departmentSlice';

import { ID } from "../model/root";
import { getHeadName } from "../model/departments";

import '../styles/ModelDepartment.scss';
import ModelPerson from './ModelPerson';

interface DepartmentProps {
  id: ID;
}

const ModelDepartment: FunctionComponent<DepartmentProps> = ( {id} ) => {

  const departmentList = useSelector(selectDepartmentList);
  const department = departmentList.find((element) => element.id === id);
  console.log('Selector test in ModelDepartment - department');
  console.log(JSON.stringify(department));

  return (
    <div className="Department">
      {
        ( department === undefined ) ?
        <h3>Department <strong># {id}</strong> is not present</h3> :
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
              <span>no staff</span> 
            }
          </div>
        </>     
      }     
    </div>
  )
}

export default ModelDepartment;