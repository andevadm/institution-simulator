// ModelDepartment.tsx
// Component with department view

import React, { FunctionComponent } from 'react';

import { useSelector } from 'react-redux';
import { selectDepartmentByID } from '../../state/departmentSlice';
import { selectStaffByID } from '../../state/staffSlice';
import { RootState } from '../../state/store';

import { ID } from "../../model/root";

import '../../styles/model/ModelDepartment.scss';
import ModelPerson from './ModelPerson';

interface DepartmentProps {
  id: ID;
}

const ModelDepartment: FunctionComponent<DepartmentProps> = ( {id} ) => {

  const department = useSelector( (state: RootState) => selectDepartmentByID(state, id) );
  const headID: ID = (department && department.head) ? department.head : 0;
  const departmentHead = useSelector( (state: RootState) => selectStaffByID(state, headID) );

  return (
    <div className="Department">
      {
        ( department === undefined ) ?
        <h4>Department <strong># {id}</strong> is not present</h4> :
        <>
          <h4 className="department-name">{department.name}</h4>
          <div className="department-head">
            Head: { (departmentHead) ? departmentHead.name : 'none' }
          </div> 
          <div className="department-staff">
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