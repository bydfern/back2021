// members-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html

const { ObjectId } = require("mongoose")

// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'members'
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const schema = new Schema({
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    birthday: {
      type: String,
      required: true
    },
    university: {
      type: String
    },
    faculty: {
      type: String
    },
    department: {
      type: String
    },
    email: {
      type: String,
      required: true
    },
    profileUrl: {
      type: String
    },
    favorite: {
      type: [ObjectId]
    },
    role: {
      type: String,
      default: 'member'
    },
    exp: {
      type: Number,
      default: 0
    },
    lastLogin: {
      type: Date,
      default: null
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
