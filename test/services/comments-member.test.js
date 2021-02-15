const assert = require('assert')
const app = require('../../src/app')

describe('\'commentsMember\' service', () => {
  it('registered the service', () => {
    const service = app.service('comments-member')

    assert.ok(service, 'Registered the service')
  })
})
