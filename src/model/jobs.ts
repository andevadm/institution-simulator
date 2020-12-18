// jobs.ts
// job types

export enum JobType {
  Admin = "Administration",
  Work = "Workers"
}

export enum WorkerJob {
  Teach = "Professor",
  Research = "Researcher",
  Supply = "Engineer"
}

export enum AdminJob {
  HeadGeneral = "Rector",
  HeadAssistant = "Vice-Rector",
  HeadDepartment = "Head of Department",
  Secretary = "Secretary",
  Finance = "Accountant",
  Officer = "Officer"
}

export enum OtherJob {
  NoJob = "No Job"
}

export type Job = 
  WorkerJob |
  AdminJob |
  OtherJob;