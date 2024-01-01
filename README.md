# ClickUp Task Manager Github Action

[![GitHub Super-Linter](https://github.com/actions/javascript-action/actions/workflows/linter.yml/badge.svg)](https://github.com/super-linter/super-linter)
![CI](https://github.com/actions/javascript-action/actions/workflows/ci.yml/badge.svg)

This Github Action is used to manage tasks for [ClickUp](https://clickup.com/),
you can use it to create or update tasks with deadlines based on different
scenarios like Pull Requests with certain labels or authors.

## Usage

```yaml
steps:
  - name: Checkout
    id: checkout
    uses: actions/checkout@v4

  - name: Create ClickUp Task
    id: create-task
    uses: p0o/clickup-task-manager-github-action@v1
    with:
      name: 'New Task Name'
      description: 'Your description'
      assignees: '[190]'
      due_date: 1508369194377
    env:
      CLICKUP_TOKEN: ${{ secrets.CLICKUP_TOKEN }}

  - name: Task Created
    id: output
    run: echo "${{ steps.create-task.outputs.url }}"
```
