// ModelInterface.tsx
// Main interface of the model

/*

Todo first:
- Select department
- New worker
- Select worker
- Dismiss worker

Sections:
- Selected Item: Person, Department or Whole Model
- Properties of the selected item
- Actions with selected item
- Notifications about action results
If nothing selected - hide interface

Model actions:
- New Department
- Show statistics (Info page)
- Reset Model

Department actions:
- New Worker
- Delete Department

Person actions:
- New task
- Select task from list
- Dismiss

*/

import React, { FunctionComponent } from 'react';

import '../styles/ModelInterface.scss';

import { testState } from '../state/initial-state';

const ModelInterface: FunctionComponent<{}> = () => {
  return (
    <div className="ModelInterface">
      <h3>Actions</h3>
    </div>
  )
}

export default ModelInterface;