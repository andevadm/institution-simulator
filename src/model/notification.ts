// notification.ts
// Notification interface and Message database

export interface Notification {
  type: MessageType;
  content: Message | string;
  checked: boolean; // true if notification has been viewed, false for a new notification
}

export type MessageType = "action" | "error"; // | "note" 

export enum Message {
  newInstitution = "A new institution is created",
  newDepartment = "A new department is created",
  processTasks = " pending tasks are processed successfully",
  errorName = "The input name already exists or empty",
  errorNoPendingTasks = "This workday has no pending tasks"
}