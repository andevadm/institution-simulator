// departments.test.ts

import { createDepartment } from '../../model/departments';
import { JobType } from '../../model/jobs';

test('Instance of Department has correct properties', () => {
  const department = createDepartment('Test Department', JobType.Admin);
  expect(department.name).toBe('Test Department');
  expect(department.type).toEqual(JobType.Admin);
});