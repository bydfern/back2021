// events-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const { ObjectId } = require('mongoose').Types

module.exports = function (app) {
  const modelName = 'events'
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const commentSchema = new Schema({
    memberId: {
      type: ObjectId,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    attachment: {
      type: Array
    }
  })
  const schema = new Schema({
    name: {
      type: String,
      required: true
    },
    detail: {
      type: String
    },
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date,
      required: true
    },
    posterUrl: {
      type: String,
      required: true
    },
    contents: {
      type: Array
    },
    comments: {
      type: [commentSchema]
    },
    following: {
      type: Number,
      default: 0
    },
    allowRank: {
      type: Number,
      default: 0
    },
    memberId: {
      type: ObjectId,
      required: true
    },
    status: {
      type: Number,
      default: 1
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
