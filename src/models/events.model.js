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
      required: true,
      index: true
    },
    endDate: {
      type: Date,
      required: true,
      index: true
    },
    posterUrl: {
      type: String,
      required: true
    },
    posterName: {
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
      type: [ObjectId]
    },
    totalRegister: {
      type: Number,
      default: 0
    },
    allowRank: {
      type: Number,
      default: 0
    },
    typeEvent: {
      type: Number, // 0=นอกสถานที่ 1=ออนไลน์,
      default: 0
    },
    location: {
      type: String
    },
    memberId: {
      type: ObjectId,
      required: true
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
