// ModelInstitution.tsx
// Root view of institution components

// InterfaceMain.tsx
// Main interface of the model

import React, { FunctionComponent, MouseEvent } from 'react';

import { useSelector } from 'react-redux';
import { selectActive } from '../../state/activeSlice';

import '../../styles/model/ModelInstitution.scss';
import InterfaceCreate from './InterfaceCreate';

const ModelInstitution: FunctionComponent<{}> = ({ children }) => {

  const activeElement = useSelector(selectActive);

  function institutionClickHandler(event: MouseEvent): void {
    event.preventDefault();
    console.log('Show/hide institution function');
  }

  return (
    <div className="ModelInstitution">
      <div className="institution-button">
        <div id="institution-button" className="interactive" onClick={institutionClickHandler}>
          Institution
        </div>
      </div>
      <div>
        {
          ( activeElement.type === "Institution" ) ?
            <InterfaceCreate /> : null
        }      
      </div>
      <div className="institution-departments">
        { children }
      </div> 
    </div>
  )

}

export default ModelInstitution;