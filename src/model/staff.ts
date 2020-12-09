// staff.ts
// classes modeling a staff

import { Department } from "./departments";
import { Job, WorkerJob, AdminJob } from "./jobs";
import { Task } from "./tasks";

// root staff class
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

  constructor(name: string, job: AdminJob, department: Department) {
    super(name, job, department);
  }

  // choose someone in administration to redirect the task
  redirect(administration: Administrator[]): Administrator {
    const otherAdmin = administration[Math.random()*(administration.length-1)];
    return otherAdmin;
  }

}

class Worker extends Person {

  constructor(name: string, job: WorkerJob, department: Department) {
    super(name, job, department);
  }

  // search for someone in administration to solve the task
  search(administration: Administrator[]): Administrator {
    const otherAdmin = administration[Math.random()*(administration.length-1)];
    return otherAdmin;
  }

}

export { Person, Administrator, Worker }