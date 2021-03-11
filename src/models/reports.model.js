// reports-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const { ObjectId } = require('mongoose').Types

module.exports = function (app) {
  const modelName = 'reports'
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const schema = new Schema({
    reporterId: {
      type: ObjectId,
      required: true
    },
    typeReport: {
      type: Number, // 0=topic 1=members
      required: true,
      index: true
    },
    targetId: {
      type: ObjectId,
      required: true
    },
    reason: {
      type: String,
      required: true
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
