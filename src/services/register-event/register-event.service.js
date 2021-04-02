// Initializes the `registerEvent` service on path `/register-event`
const { RegisterEvent } = require('./register-event.class')
const createModel = require('../../models/register-event.model')
const hooks = require('./register-event.hooks')

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  }

  // Initialize our service with any options it requires
  app.use('/register-event', new RegisterEvent(options, app))

  // Get our initialized service so that we can register hooks
  const service = app.service('register-event')

  service.hooks(hooks)
}
