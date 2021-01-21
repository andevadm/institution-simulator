// ModelTask.tsx
// Component showing a task properties

import React, { FunctionComponent } from 'react';

import { useSelector } from 'react-redux';
import { selectTaskByID } from '../../state/taskSlice';
import { selectStaffByID } from '../../state/staffSlice';
import { RootState } from '../../state/store';

import { ID } from "../../model/root";
import { TaskStage, Status } from "../../model/tasks";

import '../../styles/model/ModelTask.scss';

interface TaskProps {
  id: ID;
}

// return style class corresponding to solved/failed task or task stage
const getCompletionClass = function(status: Status | undefined): string {
  switch (status) {
    case Status.Solve:
      return 'task-solved';
    case Status.Fail:
      return 'task-failed';
    default:
      return '' 
  }
}

const ModelTask: FunctionComponent<TaskProps> = ({id}) => {

  const task = useSelector( (state: RootState) => selectTaskByID(state, id) );
  const authorID: ID = task?.author ?? 0;
  const author = useSelector( (state: RootState) => selectStaffByID(state, authorID) );
  const taskCompletionClass: string = getCompletionClass(task?.status);

  return (   
    <div className={`Task ${taskCompletionClass}`}>
      {
        ( task === undefined ) ?
        <h6>Task <strong># {id}</strong> is not present</h6> :
        <>
          <h6 className="task-objective">{task.objective}</h6>
          <div className="task-status">{task.status}</div>
          <div className="task-author">Created by {author?.name || 'unknown'}</div>
          <div className="task-duration">Processed for {task.duration} days</div>
          <div className="task-history">
            <em>Stages:</em>
            <ol>
            {
              ( task.history.length > 0 ) ?
              task.history.map((taskStage, index) => {
                return (
                  <li key={index}>
                    <ModelTaskStage taskStage={taskStage} />
                  </li>
                ) 
              }) : 
              <p>no history</p> 
            }
            </ol>
          </div>            
        </>
      }
    </div>
  )
}

const ModelTaskStage: FunctionComponent<{taskStage: TaskStage}> = ({taskStage}) => {

  const executor = useSelector( (state: RootState) => selectStaffByID(state, taskStage.executor) );
  const taskStageCompletionClass: string = getCompletionClass(taskStage.status);

  return (   
    <div className={`TaskStage ${taskStageCompletionClass}`}>
      <span className="task-stage-objective">{taskStage.objective} </span> 
      by <span className="task-stage-executor">{executor?.name || 'unknown'}</span>
      : <span className="task-stage-status">{taskStage.status}</span>
    </div>
  )

}

export default ModelTask;