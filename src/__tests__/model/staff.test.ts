// staff.test.ts

import { Person } from '../../model/staff';
import { WorkerJob } from '../../model/jobs';
import { Department } from '../../model/departments';

test('Instance of Person has correct properties', () => {
  let department = new Department('Test');
  let person = new Person('Name', WorkerJob.Research, department);
  expect(person.name).toBe('Name');
  expect(person.job).toEqual(WorkerJob.Research);
  expect(person.department).toEqual(department);
  expect(Number.isInteger(person.hireDate)).toBeTruthy();
  expect(Number.isInteger(person.getExperience())).toBeTruthy();
  expect(person.getExperience()).toBeGreaterThanOrEqual(0);
});