// departments.ts
// classes modeling departments

import { Person, Administrator } from './staff';

// root department class
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

// Object Constructor test - for Redux store
/*
export interface DepartmentType {
  name: string; // unique id
  head: Administrator | undefined;
  staffList: Person[];
}
const Department = function (this: DepartmentType, name: string) {
  this.name = name;
  this.staffList = [];
} as any as { new (name: string): DepartmentType }
*/

export { Department }