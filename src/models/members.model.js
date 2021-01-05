// members-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'members'
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const schema = new Schema({
    firstName: {
      type: String,
      require: true
    },
    lastName: {
      type: String,
      require: true
    },
    birthday: {
      type: String,
      require: true
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
      require: true
    },
    profileUrl: {
      type: String
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
