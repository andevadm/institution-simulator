// root.ts
// general model variables and types

// id is a serial number of created element
// id of the first element = 1
// id of the last element = number of all created elements, even if they are deleted (don't consider deletion of the last element)
// id is counted separately for each ElementType
// id of the whole Institution = 0
export type ID = number;

// ElementType defines the corresponding store with separate count of id
export type ElementType = "Task" | "Staff" | "Department" | "Institution";

// ElementSelector defines the active selected element to work with
export interface ElementSelector {
  type: ElementType;
  id: ID;
}