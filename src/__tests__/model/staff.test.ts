// staff.test.ts

import { createStaff } from '../../model/staff';
import { JobType, WorkerJob } from '../../model/jobs';
import { createDepartment } from '../../model/departments';

test('Instance of Person has correct properties', () => {
  let department = createDepartment('Test Department', JobType.Admin);
  let person = createStaff('Test Name', WorkerJob.Research, department.id);
  expect(person.name).toBe('Test Name');
  expect(person.job).toEqual(WorkerJob.Research);
  expect(person.department).toEqual(department.id);
});