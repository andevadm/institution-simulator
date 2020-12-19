// departments.ts
// Department objects and functions

import { ID } from "./root";
import { JobType } from './jobs';

// Department as serializable object
export interface DepartmentInterface {
  id: ID;
  name: string;
  type: JobType;
  head: ID | null;
  staffList: ID[];
}

// ? How to get Head Name from store in this modules
export function getHeadName(department: DepartmentInterface) {
  return department.id.toString();
}

// Department constructor function - also creates non-serializable object
/*
export const Department = function (this: DepartmentInterface, name: string) {
  this.id = nanoid();
  this.name = name;
  this.staffList = []; // test value
} as any as { new (name: string): DepartmentInterface }
*/

// initial Department class - not used for Redux as non-serializable data
/*
class Department {
  name: string; // unique id
  head: Administrator | undefined;
  staffList: Person[];

  constructor(name: string) {
    this.name = name;
    this.staffList = [];
  }

  hireWorker(person: Person): void {
    this.staffList.push(person);
  }

  dismissWorker(person: Person): void {
    const index = this.staffList.indexOf(person);
    if (index > -1) {
      this.staffList.splice(index, 1);
    }
  }

}
*/