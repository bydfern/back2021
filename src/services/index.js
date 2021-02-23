const members = require('./members/members.service.js')
const topics = require('./topics/topics.service.js')
const favoriteTopic = require('./favorite-topic/favorite-topic.service.js')
const reports = require('./reports/reports.service.js')
const commentsMember = require('./comments-member/comments-member.service.js')
const events = require('./events/events.service.js')
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(members)
  app.configure(topics)
  app.configure(favoriteTopic)
  app.configure(reports)
  app.configure(commentsMember)
  app.configure(events)
}
