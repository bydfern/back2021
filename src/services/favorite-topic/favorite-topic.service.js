// Initializes the `favoriteTopic` service on path `/favorite-topic`
const { FavoriteTopic } = require('./favorite-topic.class')
const hooks = require('./favorite-topic.hooks')

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  }

  // Initialize our service with any options it requires
  app.use('/favorite-topic', new FavoriteTopic(options, app))

  // Get our initialized service so that we can register hooks
  const service = app.service('favorite-topic')

  service.hooks(hooks)
}
