// tasks.ts
// task types and processing

import { ID } from "./root";

// tasks and task stages should not be deleted, saving the institution history
// completed tasks and stages are marked with status 'solve' or 'fail' 
export interface TaskInterface {
  id: ID;
  objective: GlobalObjective;
  author: ID; // initiator of a task
  status: Status; // general task status: if 'solve' or 'fail', the task is completed
  duration: number; // general task duration 
  history: TaskStage[]; // array of task stages, should not be empty
  notice?: string;
}

// Stage of task solving
// If todo or executor is changed, a new stage is created
// If status is 'solve', 'fail' or 'redirect', the stage is completed
export interface TaskStage {
  objective: LocalObjective;
  executor: ID; 
  status: Status;
  duration: number;
}

export enum Status {
  Work = "In work",
  Wait = "Under consideration",
  Reject = "Rejected",
  Redirect = "Redirected",
  Solve = "Solved",
  Fail = "Not solved and closed"
}

export type Objective = GlobalObjective | LocalObjective;

export enum GlobalObjective {
  Routine = "Routine duties",
  Manage = "Manage documents", // Stages: prepare, make documents, sign, report
  Research = "Carry out research", // Stages: prepare, supply, experiment, data processing, publish
  Teach = "Work with students", // Stages: prepare, supply, lesson
  Trip = "To go to business trip" // Stages: prepare and sign documents, trip, report
}

export enum LocalObjective {  
  Prepare = "Prepare to work",
  Workplan = "Develop workplan",
  Sign = "Sign papers",
  Report = "Report results to superiors",
  Supply = "Provide work of equipment"
}

export function processTaskStatus(currentStatus: Status): Status { 
  let newStatus: Status;
  switch ( currentStatus ) {
    case Status.Work:
      newStatus = 
        ( Math.random() > 0.2 ) ? 
        Status.Solve :
        Status.Reject;
      break;
    case Status.Wait:
      newStatus = Status.Work;
      break;
    case Status.Reject:
      newStatus = Status.Fail;
      break;
    default:
      newStatus = currentStatus;      
  }
  return newStatus
}