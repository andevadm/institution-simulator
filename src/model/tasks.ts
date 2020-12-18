// tasks.ts
// task types

import { ID } from "./root";
import { nanoid } from '@reduxjs/toolkit';

export interface TaskInterface {
  id: ID;
  objective: Objective;
  executor: ID;
  status: Status;
  notice?: any;
}

export enum Status {
  Work = "In work",
  Wait = "Under consideration",
  Solve = "Solved",
  Reject = "Rejected",
  Fail = "Not solved and closed"
}

export type Objective = AdminObjective | WorkObjective | GeneralObjective;

export enum AdminObjective {
  Prepare = "Prepare documents",
  Manage = "Manage documents",
  Sign = "Sign papers",
  Report = "Report to superiors"
}

export enum WorkObjective {
  Prepare = "Prepare workplan",
  Research = "Carry out research",
  Teach = "Work with students",
  Supply = "Provide work of equipment",
  Report = "Workplan report"
}

export enum GeneralObjective {
  Routine = "Preparing for a work"
}

export function createTask(objective: Objective, executor: ID): TaskInterface {
  return {
    id: nanoid(),
    objective,
    executor,
    status: Status.Wait
  }
}