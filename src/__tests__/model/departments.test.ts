// departments.test.ts

import { Department } from '../../model/departments';

test('Instance of Department has correct properties', () => {
  let department = new Department('Test');
  expect(department.name).toBe('Test');
});