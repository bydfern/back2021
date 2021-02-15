/* eslint-disable no-unused-vars */
const { ObjectId } = require('mongoose').Types

exports.CommentsMember = class CommentsMember {
  constructor (options, app) {
    this.options = options || {}
    this.model = app.service('members').Model
  }

  async find (params) {
    return []
  }

  async get (id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    }
  }

  async create (data, params) {
    const membersId = data.membersId.map(id => ObjectId(id))
    const memberData = this.model.aggregate([
      {
        $match: {
          _id: {
            $in: membersId
          }
        }
      },
      {
        $project: {
          _id: 1,
          email: 1,
          firstName: 1,
          lastName: 1,
          profileUrl: 1,
          exp: 1
        }
      }
    ])

    return memberData
  }

  async update (id, data, params) {
    return data
  }

  async patch (id, data, params) {
    return data
  }

  async remove (id, params) {
    return { id }
  }
}
