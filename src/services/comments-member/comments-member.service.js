// Initializes the `commentsMember` service on path `/comments-member`
const { CommentsMember } = require('./comments-member.class')
const hooks = require('./comments-member.hooks')

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  }

  // Initialize our service with any options it requires
  app.use('/comments-member', new CommentsMember(options, app))

  // Get our initialized service so that we can register hooks
  const service = app.service('comments-member')

  service.hooks(hooks)
}
