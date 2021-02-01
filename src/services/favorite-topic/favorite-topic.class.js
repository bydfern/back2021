/* eslint-disable no-unused-vars */
exports.FavoriteTopic = class FavoriteTopic {
  constructor (options, app) {
    this.options = options || {}
    this.topicsModel = app.service('topics').Model
    this.membersModel = app.service('members').Model
  }

  async find (params) {
    return []
  }

  async get (id, params) {
    const { favorite } = await this.membersModel.findById(id)
    const data = await this.topicsModel.aggregate([
      {
        $match: {
          _id: {
            $in: favorite
          }
        }
      }
    ])

    return data
  }

  async create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)))
    }

    return data
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
