# Workplan

Todo first:
+ Main Interface, corresponding state Notification (string[]) and enum Message as notification database 
+ Basic workday simulation: selector selectPendingTasks and simple ProcessTask function for single stage tasks 
+ ModelTask component
- Select department/worker/task: find clicked block from department component by class name and set active 
  or make HOC wrapper component including setActive, select and interactive style functions
- New department/worker/task options for InterfaceCreate, and position changing to selected element 
- Improved workday simulation: ProcessTask functions for multi-stage tasks (changing local objective)
- Improved workday simulation: ProcessTask functions for tasks changing executor
- Dismiss worker
- Remove department

Sections:

- Tutorial notifications: what to do
- Next step button (proceed the planned actions)
- Notifications about action results

- Selected Item: Person, Department or Whole Institution
- Properties of the selected item
- Actions with selected item
If nothing selected - hide interface

Institution actions:
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
