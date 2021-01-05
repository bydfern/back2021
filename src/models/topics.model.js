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
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String
    },
    message: {
      type: String,
      required: true
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
    comments: {
      type: [commentSchema]
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