// InterfaceMain.tsx
// Main interface of the model

import React, { FunctionComponent, MouseEvent } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectNotification, checkMessage } from '../../state/notificationSlice';

import '../../styles/model/InterfaceMain.scss';

const InterfaceMain: FunctionComponent<{}> = () => {

  const notification = useSelector(selectNotification);
  const dispatch = useDispatch();

  function nextButtonHandler(event: MouseEvent): void {
    event.preventDefault();
    console.log('Next step function');
  }

  function checkMessageHandler(event: MouseEvent): void {
    const messageElement = event.target as HTMLElement;
    if ( /message/.test(messageElement.id) && messageElement.classList.contains('new-message') ) {
      const foundID = messageElement.id.match(/\d+/);
      const messageID: number = (foundID) ? +foundID[0] : -1;
      dispatch(checkMessage(messageID));
    }
  }

  return (
    <div className="InterfaceMain">
      <div className="interface-next-button">
        <button id="nextButton" onClick={nextButtonHandler}>
          Next Workday
        </button>
      </div>
      <ul id="interfaceNotification" className="interface-notification">
        {
          notification.map( ( message, index ) => {
            const typeClass = `${message.type}-message`;
            const checkedClass = (message.checked) ? '' : 'new-message';
            const iconType = (message.type === 'action') ? 'check_circle_outline' : 'error_outline';
            const messageID = `message-${index}`;
            return (
              <li 
                className={typeClass} 
                onMouseOver={checkMessageHandler}
                key={messageID} 
              >
                <span className="material-icons md-18">{iconType}</span>
                <em id={messageID} className={checkedClass}>{ message.content }</em>
              </li>
            )
          }).reverse()
        }
      </ul>   
    </div>
  )

}

export default InterfaceMain;