// departments.test.ts

import { DepartmentInterface } from '../../model/departments';
import { JobType } from '../../model/jobs';

test('Instance of Department has correct properties', () => {
  const department: DepartmentInterface = {
    id: 1,
    name: 'Test Department',
    type: JobType.Admin,
    head: null,
    staffList: []
  };
  expect(department.name).toBe('Test Department');
  expect(department.type).toEqual(JobType.Admin);
});