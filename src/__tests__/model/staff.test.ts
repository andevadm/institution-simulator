// staff.test.ts

import { StaffInterface } from '../../model/staff';
import { JobType, AdminJob } from '../../model/jobs';
import { DepartmentInterface } from '../../model/departments';

test('Instance of Person has correct properties', () => {
  const department: DepartmentInterface = {
    id: 1,
    name: 'Test Department',
    type: JobType.Admin,
    head: null,
    staffList: []
  };
  const person = {
    id: 1,
    name: 'Test Person',
    job: AdminJob.HeadGeneral,
    department: 1,
    taskList: [],
    hireDate: Date.now()
  };
  expect(person.name).toBe('Test Person');
  expect(person.job).toEqual(AdminJob.HeadGeneral);
  expect(person.department).toEqual(department.id);
});