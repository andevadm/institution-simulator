// staff.ts
// classes modeling a staff

import { Job } from "./jobs";
import { ID } from "./root";

// Staff as serializable object
export interface StaffInterface {
  id: ID;
  name: string;
  job: Job;
  department: ID;
  taskList: ID[];
  hireDate: number;
}

// calculate experience from hiring date
export function getExperience(hireDate: number): number {
  const experience = Date.now() - hireDate;
  const experienceInMinutes = Math.floor(experience/60000);
  return experienceInMinutes;
}

// Department constructor function - also creates non-serializable object
/*
export const Staff = function (this: StaffInterface, name: string, job: Job, department: ID) {
  this.id = nanoid();
  this.name = name;
  this.job = job;
  this.department = department;
  this.hireDate = Date.now();
  this.taskList = [];
} as any as { new (name: string): StaffInterface }
*/

// initial Person classes - not used for Redux as non-serializable data
/*
class Person {
  name: string; // unique id
  job: Job;
  department: Department;
  taskList: Task[];
  hireDate: number;

  constructor(name: string, job: Job, department: Department) {
    this.name = name;
    this.job = job;
    this.department = department;
    this.hireDate = Date.now();
    this.taskList = [];
  }

  // decide to take or decline the task obtained from person 
  getTask(task: Task, person: Person): void {}

  // take obtained task in my tasklist
  takeTask(task: Task): void {
    this.taskList.push(task)
  }

  // send task to person
  sendTask(task: Task, person: Person): void {}

  // reply to person about the task even processed or not
  replyTask(task: Task, person: Person): void {}

  // time from being hired to now in minutes
  getExperience(): number {
    let experience = Date.now() - this.hireDate;
    return Math.floor(experience/60000);
  }

}

class Administrator extends Person {

  // choose someone in administration to redirect the task
  redirect(administration: Administrator[]): Administrator {
    const otherAdmin = administration[Math.random()*(administration.length-1)];
    return otherAdmin;
  }

}

class Worker extends Person {

  // search for someone in administration to solve the task
  search(administration: Administrator[]): Administrator {
    const otherAdmin = administration[Math.random()*(administration.length-1)];
    return otherAdmin;
  }

}
*/