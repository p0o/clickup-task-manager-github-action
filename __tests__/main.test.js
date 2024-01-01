/**
 * Unit tests for the action's main functionality, src/main.js
 */
const core = require('@actions/core')
const main = require('../src/main')
const { createNewTask } = require('../src/utils/clickup')

// Mock the GitHub Actions core library
const debugMock = jest.spyOn(core, 'debug').mockImplementation()
const getInputMock = jest.spyOn(core, 'getInput').mockImplementation()
const setFailedMock = jest.spyOn(core, 'setFailed').mockImplementation()
const setOutputMock = jest.spyOn(core, 'setOutput').mockImplementation()

jest.mock('../src/utils/clickup', () => ({
  createNewTask: jest.fn()
}))

describe('action', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should throw if CLICKUP_TOKEN is not provided', async () => {
    process.env.CLICKUP_TOKEN = ''

    await main.run()

    expect(setFailedMock).toHaveBeenCalledWith(
      'Missing CLICKUP_TOKEN environment variable.'
    )
  })

  it('should call createNewTask() if type is create', async () => {
    getInputMock.mockImplementation(x => {
      if (x === 'type') {
        return 'create'
      }
    })
    process.env.CLICKUP_TOKEN = 'dummytoken'

    await main.run()

    expect(createNewTask).toHaveBeenCalled()
  })
})
