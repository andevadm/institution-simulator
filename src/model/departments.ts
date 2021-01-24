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
