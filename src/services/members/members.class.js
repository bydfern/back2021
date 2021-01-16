const { Service } = require('feathers-mongoose')

exports.Members = class Members extends Service {
  async find (params) {
    if (!params.query.status) {
      params.query.status = 1
    }

    return super.find(params)
  }

  async remove (id, params) {
    const topicModel = this.options.app.service('topics').Model
    topicModel.updateMany({ memberId: id }, { status: 0 })

    return super.patch(id, { status: 0 }, params)
  }
}
