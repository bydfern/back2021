const { Service } = require('feathers-mongoose')

exports.Topics = class Topics extends Service {
  async find (params) {
    if (!params.query.status) {
      params.query.status = 1
    }

    return super.find(params)
  }

  async remove (id, params) {
    return super.patch(id, { status: 0 }, params)
  }
}
