// root.test.ts

import { Person } from '../../model/root';

test('Instance of Person has correct properties', () => {
  let person = new Person('Name');
  expect(person.name).toBe('Name');
  expect(Number.isInteger(person.id)).toBeTruthy();
  expect(person.greet().length).toBeGreaterThan(0);
});