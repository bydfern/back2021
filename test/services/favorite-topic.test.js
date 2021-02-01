const assert = require('assert')
const app = require('../../src/app')

describe('\'favoriteTopic\' service', () => {
  it('registered the service', () => {
    const service = app.service('favorite-topic')

    assert.ok(service, 'Registered the service')
  })
})
