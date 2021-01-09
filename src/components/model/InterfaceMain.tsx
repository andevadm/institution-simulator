// InterfaceMain.tsx
// Main interface of the model

import React, { FunctionComponent, MouseEvent } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectNotification, addMessage, checkMessage } from '../../state/notificationSlice';
import { selectPendingTasks, manageTask } from '../../state/taskSlice';

import '../../styles/model/InterfaceMain.scss';
import { TaskStage, processTaskStatus } from '../../model/tasks';
import { Message } from '../../model/notification';

const InterfaceMain: FunctionComponent<{}> = () => {

  const notification = useSelector(selectNotification);
  const tasksPending = useSelector(selectPendingTasks);
  const dispatch = useDispatch();

  function nextButtonHandler(event: MouseEvent): void {
    event.preventDefault();
    // notification if no pending tasks are present
    if ( tasksPending.length === 0 ) {
      dispatch( addMessage(['error', Message.errorNoPendingTasks]) );
      return
    }
    // process pending tasks
    for ( let task of tasksPending ) {
      const lastTaskStage: TaskStage = task.history[task.history.length - 1];
      // at least one stage should be present in the task history
      if (!lastTaskStage) throw new Error('nextButtonHandler: task in tasksPending has empty history');
      const processedTaskStage: TaskStage = 
        // create stage based on the last stage
        // the functions processing each stage parameter should be created
        // duration is modified by reducer
        {
          objective: lastTaskStage.objective,
          executor: lastTaskStage.executor, 
          status: processTaskStatus(lastTaskStage.status),
          duration: lastTaskStage.duration 
        };
      dispatch( manageTask([task.id, processedTaskStage]) );
      dispatch( addMessage(['action', tasksPending.length + Message.processTasks]) );
    }
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