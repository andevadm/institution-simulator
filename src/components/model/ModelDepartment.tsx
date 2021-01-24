// ModelDepartment.tsx
// Component with department view

import React, { FunctionComponent, MouseEvent, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectDepartmentByID } from '../../state/departmentSlice';
import { selectStaffByID } from '../../state/staffSlice';
import { selectActive, newSelect, resetSelect } from '../../state/activeSlice';
import { RootState } from '../../state/store';

import { ID } from "../../model/root";

import '../../styles/model/ModelDepartment.scss';
import ModelPerson from './ModelPerson';

interface DepartmentProps {
  id: ID;
}

const ModelDepartment: FunctionComponent<DepartmentProps> = ( {id} ) => {

  const department = useSelector( (state: RootState) => selectDepartmentByID(state, id) );
  const headID: ID = department?.head ?? 0;
  const departmentHead = useSelector( (state: RootState) => selectStaffByID(state, headID) );
  const activeComponent = useSelector(selectActive);
  const dispatch = useDispatch();

  // Check if the target is correct for mouse events: 
  // true if it is the component itself or its children
  // false if it is deeper nested component
  const checkIfProperTarget = function(target: HTMLElement): boolean {
    return Boolean(
      target.classList.contains('Department') || 
      target.parentElement?.classList.contains('Department')
    )
  } 

  // Interactive behavior: define mouse hover class added to the component 
  const [interactiveClass, setInteractiveClass] = useState('');
  function checkInteractive(event: MouseEvent): void {
    const target = event.target as HTMLInputElement;
    if ( checkIfProperTarget(target) ) {
      setInteractiveClass('interactive');
    } else setInteractiveClass('');
  }

  // Selection behavior: select or deselect component through activeSlice
  // define if component is active in app state
  const isActiveComponent: boolean = (activeComponent.type === 'Department') && (activeComponent.id === id);
  // set selection style class
  const selectionClass: string = (isActiveComponent) ? 'selected-partial' : '';
  // handle selection mouse click
  function checkSelection(event: MouseEvent): void {
    // no influence on container components
    event.stopPropagation();
    // check if target is correct
    const target = event.target as HTMLInputElement;
    if ( !checkIfProperTarget(target) ) return;
    // select or deselect
    if ( isActiveComponent ) {
      dispatch( resetSelect() )
    } else {
      dispatch( newSelect(['Department', id]) )
    }
  }

  return (
    <div 
      className={`Department ${selectionClass} ${interactiveClass}`} 
      onMouseOver={checkInteractive}
      onClick={checkSelection}
    >
      {
        ( department === undefined ) ?
        <h4>Department <strong># {id}</strong> is not present</h4> :
        <>
          <h4 className="department-name">
            {department.name}
          </h4>
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