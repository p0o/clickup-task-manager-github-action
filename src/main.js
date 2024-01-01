const core = require('@actions/core')
const { createNewTask } = require('./utils/clickup')

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
async function run() {
  try {
    const type = core.getInput('type', { required: true })
    const token = process.env.CLICKUP_TOKEN

    if (!token) {
      throw new Error('Missing CLICKUP_TOKEN environment variable.')
    }

    if (type === 'create') {
      const name = core.getInput('name', { required: true })
      const list_id = core.getInput('list_id', { required: true })
      const description = core.getInput('description')
      const markdown_description = core.getInput('markdown_description')
      let assignees = core.getInput('assignees')
      if (assignees) {
        assignees = JSON.parse(assignees)
      }
      const tags = core.getInput('tags')
      const status = core.getInput('status')
      const priority = core.getInput('priority')
      const due_date = core.getInput('due_date')
      const due_date_time = core.getInput('due_date_time')
      const time_estimate = core.getInput('time_estimate')
      const start_date = core.getInput('start_date')
      const start_date_time = core.getInput('start_date_time')
      const notify_all = core.getInput('notify_all')
      const parent = core.getInput('parent')
      const links_to = core.getInput('links_to')

      const response = await createNewTask({
        name,
        list_id,
        token,
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
      outputResposne(response)
    }
  } catch (error) {
    // Fail the workflow run if an error occurs
    core.setFailed(error.message)
  }
}

function outputResposne(response) {
  core.setOutput('id', response.body.id)
  core.setOutput('url', response.body.url)
}

module.exports = {
  run
}
