const members = require('./members/members.service.js')
const topics = require('./topics/topics.service.js')
const favoriteTopic = require('./favorite-topic/favorite-topic.service.js')
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(members)
  app.configure(topics)
  app.configure(favoriteTopic)
}
