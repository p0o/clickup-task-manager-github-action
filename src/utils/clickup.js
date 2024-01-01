async function createNewTask({
  list_id,
  token,
  team_id,
  custom_task_ids,
  name,
  description,
  markdown_description,
  assignees,
  tags,
  status,
  priority,
  due_date,
  due_date_time,
  time_estimate,
  start_date,
  start_date_time,
  notify_all,
  parent,
  links_to
}) {
  const query = new URLSearchParams({
    custom_task_ids: custom_task_ids || 'false',
    team_id
  }).toString()

  const response = await fetch(
    `https://api.clickup.com/api/v2/list/${list_id}/task?${query}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify({
        name,
        description,
        markdown_description,
        assignees,
        tags,
        status,
        priority,
        due_date,
        due_date_time,
        time_estimate,
        start_date,
        start_date_time,
        notify_all,
        parent,
        links_to
      })
    }
  )
  return await response.json()
}

module.exports = {
  createNewTask
}
