const assert = require('assert');
const app = require('../../src/app');

describe('\'registerEvent\' service', () => {
  it('registered the service', () => {
    const service = app.service('register-event');

    assert.ok(service, 'Registered the service');
  });
});
