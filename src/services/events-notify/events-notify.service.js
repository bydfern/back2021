// Initializes the `eventsNotify` service on path `/events-notify`
const { EventsNotify } = require('./events-notify.class')
const hooks = require('./events-notify.hooks')

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  }

  // Initialize our service with any options it requires
  app.use('/events-notify', new EventsNotify(options, app))

  // Get our initialized service so that we can register hooks
  const service = app.service('events-notify')

  service.hooks(hooks)
}
