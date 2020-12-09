// tasks.ts
// task types

import { Person } from './staff';

export enum Status {
  InWork = "In work",
  Delayed = "Under consideration",
  Solved = "Solved",
  Rejected = "Rejected",
  Failed = "Not solved and closed"
}

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

export type Objective = AdminObjective | WorkObjective | GeneralObjective;

export interface Task {
  objective: Objective;
  executors: Person[];
  status: Status;
  notice: any;
}