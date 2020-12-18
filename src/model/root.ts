// root.ts
// general model variables and types

export type ID = string | number;

export type ElementType = "Task" | "Staff" | "Department" | "Institution";

export interface ElementSelector {
  type: ElementType;
  id: ID;
}