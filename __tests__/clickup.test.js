/**
 * Unit tests for src/wait.js
 */
const { createNewTask } = require('../src/utils/clickup')
const { expect } = require('@jest/globals')

jest.spyOn(global, 'fetch').mockImplementation(() => {
  return Promise.resolve({
    json: () =>
      Promise.resolve({
        id: '9hx',
        custom_id: null,
        custom_item_id: null,
        name: 'New Task Name',
        text_content: 'New Task Content',
        description: 'New Task Content',
        markdown_description: 'New Task Content',
        status: {
          status: 'in progress',
          color: '#d3d3d3',
          orderindex: 1,
          type: 'custom'
        },
        orderindex: '1.00000000000000000000000000000000',
        date_created: '1567780450202',
        date_updated: '1567780450202',
        date_closed: null,
        date_done: null,
        creator: {
          id: 183,
          username: 'John Doe',
          color: '#827718',
          profilePicture:
            'https://attachments-public.clickup.com/profilePictures/183_abc.jpg'
        },
        assignees: [],
        checklists: [],
        tags: [],
        parent: 'abc1234',
        priority: null,
        due_date: null,
        start_date: null,
        time_estimate: null,
        time_spent: null,
        custom_fields: [
          {
            id: '0a52c486-5f05-403b-b4fd-c512ff05131c',
            name: 'My Text Custom field',
            type: 'text',
            type_config: {},
            date_created: '1622176979540',
            hide_from_guests: false,
            value: {
              value: 'This is a string of text added to a Custom Field.'
            },
            required: true
          }
        ],
        list: {
          id: '123'
        },
        folder: {
          id: '456'
        },
        space: {
          id: '789'
        },
        url: 'https://app.clickup.com/t/9hx'
      })
  })
})

describe('clickup.js', () => {
  describe('createNewTask', () => {
    it('should return a response', async () => {
      const response = await createNewTask({
        listId: '123',
        token: '123',
        team_id: '123',
        name: 'Test',
        description: 'Test',
        markdown_description: 'Test',
        assignees: 'Test',
        tags: 'Test',
        status: 'Test',
        priority: 'Test',
        due_date: 'Test',
        due_date_time: 'Test',
        time_estimate: 'Test',
        start_date: 'Test',
        start_date_time: 'Test',
        notify_all: 'Test',
        parent: 'Test',
        links_to: 'Test'
      })
      expect(response).toBeDefined()
    })

    it('should return a response with an id and url', async () => {
      const response = await createNewTask({
        listId: '123',
        token: '123',
        team_id: '123',
        name: 'Test',
        description: 'Test',
        markdown_description: 'Test',
        assignees: 'Test',
        tags: 'Test',
        status: 'Test',
        priority: 'Test',
        due_date: 'Test',
        due_date_time: 'Test',
        time_estimate: 'Test',
        start_date: 'Test',
        start_date_time: 'Test',
        notify_all: 'Test',
        parent: 'Test',
        links_to: 'Test'
      })
      expect(response.id).toBeDefined()
      expect(response.url).toBeDefined()
    })
  })
})
