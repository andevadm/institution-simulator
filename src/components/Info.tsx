// Info.tsx
// Component with information about elements of the model

import React, { FunctionComponent } from 'react';

import { useSelector } from 'react-redux';
import { selectDepartmentList } from '../state/departmentSlice';
import { selectStaffList } from '../state/staffSlice';
import { selectTaskList } from '../state/taskSlice';

import '../styles/Info.scss';

const Info: FunctionComponent<{}> = () => {

  const totalDepartments = useSelector(selectDepartmentList).length;
  const totalStaff = useSelector(selectStaffList).length;
  const totalTasks = useSelector(selectTaskList).length;

  return (
    <div className="Info">
      <h2>Info</h2>
      <p>
        Current statistics of the model.
      </p>
      <div>
        <h3>
          Total
        </h3>
        <ul className="info-values">
          <li>
            <strong>Departments</strong><span>{totalDepartments}</span>
          </li>
          <li>
            <strong>Staff</strong><span>{totalStaff}</span>
          </li>
          <li>
            <strong>Tasks</strong><span>{totalTasks}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Info;