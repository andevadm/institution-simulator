// initial-state.ts

import { Department } from "../model/departments";
import { Person, Administrator, Worker } from '../model/staff';
import { WorkerJob, AdminJob } from "../model/jobs";
import { Task } from "../model/tasks";

interface State {
  departments: Department[];
  staff: Person[];
  taskList: Task[];
  selected: Person | Department | null;
}

export const initialState: State = {
  departments: [
    new Department('Main Administartion'),
    new Department('General Science')
  ],
  staff: [],
  taskList: [],
  selected: null
}

const testState = {
  departments: initialState.departments,
  staff: [
    new Administrator('Director Jones', AdminJob.HeadGeneral, initialState.departments[0]),
    new Worker('Worker Smith', WorkerJob.Research, initialState.departments[1])
  ],
  taskList: []
}
testState.departments[0].staffList.push(testState.staff[0]);
testState.departments[1].staffList.push(testState.staff[1]);
export { testState }