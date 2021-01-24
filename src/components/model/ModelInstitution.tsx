// ModelInstitution.tsx
// Root view of institution components

// InterfaceMain.tsx
// Main interface of the model

import React, { FunctionComponent, MouseEvent } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectActive, resetSelect } from '../../state/activeSlice';

import '../../styles/model/ModelInstitution.scss';
import InterfaceCreate from './InterfaceCreate';

const ModelInstitution: FunctionComponent<{}> = ({ children }) => {

  const activeComponent = useSelector(selectActive);
  const dispatch = useDispatch();

  // check if active and set corresponding selection class
  const isActiveComponent: boolean = (activeComponent.type === 'Institution');
  const selectionClass: string = (isActiveComponent) ? 'selected-partial' : '';

  // set Institition as active element if the institution-button is clicked
  function selectInstitution(event: MouseEvent): void {
    // select Institution = initial state of active element
    event.preventDefault();
    dispatch( resetSelect() );
  }

  return (
    <div className="ModelInstitution">
      <div className="institution-button">
        <div 
          id="institution-button" 
          className={`interactive-button ${selectionClass}`} 
          onClick={selectInstitution}
        >
          Institution
        </div>
      </div>
      <div>
        {
          ( isActiveComponent ) ?
            <InterfaceCreate elementType="Department" /> : null
        }      
      </div>
      <div className="institution-departments">
        { children }
      </div> 
    </div>
  )

}

export default ModelInstitution;