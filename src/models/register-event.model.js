// registerEvent-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const { ObjectId } = require('mongoose').Types

module.exports = function (app) {
  const modelName = 'register-event'
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const schema = new Schema({
    eventId: {
      type: ObjectId,
      required: true,
      index: true
    },
    eventName: {
      type: String,
      require: true
    },
    memberId: {
      type: ObjectId,
      required: true,
      index: true
    },
    memberName: {
      type: String,
      required: true
    },
    memberEmail: {
      type: String,
      required: true
    },
    detail: {
      type: String
    },
    acceptStatus: { // 0=ยกเลิก 1=อนุมัติ 2=รอดำเนินการ
      type: Number,
      default: 2,
      index: true
    },
    status: {
      type: Number,
      default: 1,
      index: true
    }
  }, {
    timestamps: true
  })

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName)
  }
  return mongooseClient.model(modelName, schema)
}
