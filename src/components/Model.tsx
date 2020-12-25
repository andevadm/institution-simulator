// Model.tsx
// Container of institution model

import React, { FunctionComponent } from 'react';

import { useSelector } from 'react-redux';
import { selectDepartmentList } from '../state/departmentSlice';

import '../styles/Model.scss';
import ModelInstitution from './model/ModelInstitution';
import ModelDepartment from './model/ModelDepartment';
import InterfaceMain from './model/InterfaceMain';
import InterfaceReset from './model/InterfaceReset';

const Model: FunctionComponent<{}> = () => {

 const departmentList = useSelector( selectDepartmentList );
 console.log('Selector test in Model - departmentList');
 console.log(departmentList);

  return (
    <div className="Model">
      <h2>
        Model
      </h2>
      <div className="model-tutorial">
        <p>
          Here is an institution. It starts with one department and one administrator.
        </p>
        <p>
          You can extend the institution: create new departments and hire staff. 
          There are 2 types of job: administration and worker. Each of them has separate tasks.
        </p>
        <p>
          Manage tasks and staff. Try to make the institution workable.
        </p>
      </div>
      <h3>Simulate a workday</h3>
      <InterfaceMain />
      <h3>Manage the institution</h3>
      <ModelInstitution>
        { 
          departmentList.map((element) => 
            <ModelDepartment id={element.id} key={element.id} />
          )
        }
      </ModelInstitution>
      <InterfaceReset />
    </div>
  );

}

export default Model;