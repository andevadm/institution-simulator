// ModelDepartment.tsx
// Component with department view

import React, { FunctionComponent } from 'react';

import { useSelector } from 'react-redux';
import { selectDepartmentList } from '../../state/departmentSlice';

import { ID } from "../../model/root";
import { getHeadName } from "../../model/departments";

import '../../styles/model/ModelDepartment.scss';
import ModelPerson from './ModelPerson';

interface DepartmentProps {
  id: ID;
}

const ModelDepartment: FunctionComponent<DepartmentProps> = ( {id} ) => {

  const departmentList = useSelector(selectDepartmentList);
  const department = departmentList.find((element) => element.id === id);

  return (
    <div className="Department">
      {
        ( department === undefined ) ?
        <h4>Department <strong># {id}</strong> is not present</h4> :
        <>
          <h4>{department.name}</h4>
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