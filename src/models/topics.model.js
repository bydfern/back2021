// topics-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const { ObjectId } = require('mongoose').Types

module.exports = function (app) {
  const modelName = 'topics'
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
    memberId: {
      type: ObjectId,
      required: true
    },
    memberEmail: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subject: {
      type: String,
      required: true
    },
    content: {
      type: Array,
      required: true
    },
    like: {
      type: [ObjectId]
    },
    comments: {
      type: [commentSchema]
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
