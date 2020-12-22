// InterfaceMain.tsx
// Main interface of the model

import React, { FunctionComponent, MouseEvent } from 'react';

import '../../styles/InterfaceMain.scss';

const InterfaceMain: FunctionComponent<{}> = () => {

  function institutionMenuHandler(event: MouseEvent): void {
    event.preventDefault();
    console.log('Show/hide institution function');
  }

  function nextButtonHandler(event: MouseEvent): void {
    event.preventDefault();
    console.log('Next step function');
  }

  return (
    <div className="InterfaceMain">
      <div>
        <div id="institutionMenu" className="institution-menu interactive" onClick={institutionMenuHandler}>
          Institution
        </div>
        <div id="tutorialBlock">
          What to do next?
        </div>
      </div>
      <div>
        <div>
          <button id="nextButton" onClick={nextButtonHandler}>
            Next Step
          </button>
        </div>
        <div id="notificationBlock">
          What is happened now?
        </div>
      </div>      
    </div>
  )

}

export default InterfaceMain;