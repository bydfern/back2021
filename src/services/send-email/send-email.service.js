// Initializes the `sendEmail` service on path `/send-email`
const { SendEmail } = require('./send-email.class')
const hooks = require('./send-email.hooks')

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  }

  // Initialize our service with any options it requires
  app.use('/send-email', new SendEmail(options, app))

  // Get our initialized service so that we can register hooks
  const service = app.service('send-email')

  service.hooks(hooks)
}
