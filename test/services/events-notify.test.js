const assert = require('assert')
const app = require('../../src/app')

describe('\'eventsNotify\' service', () => {
  it('registered the service', () => {
    const service = app.service('events-notify')

    assert.ok(service, 'Registered the service')
  })
})
