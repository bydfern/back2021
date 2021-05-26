/* eslint-disable no-unused-vars */
const { BadRequest, GeneralError } = require('@feathersjs/errors')
const nodeMailer = require('nodemailer')

exports.SendEmail = class SendEmail {
  constructor (options) {
    this.options = options || {}
  }

  async find (params) {
    return []
  }

  async get (id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    }
  }

  async create (data, params) {
    try {
      if (!data.email || !data.message) {
        throw new BadRequest()
      }
      const transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'educationspace.project@gmail.com',
          pass: 'educationspace123456'
        }
      })
      const result = await transporter.sendMail({
        to: data.email,
        subject: data.subject,
        html: data.message
      })
      if (!result) {
        throw new GeneralError('nodemailer error')
      }

      return result
    } catch (error) {
      throw new GeneralError(error)
    }
  }

  async update (id, data, params) {
    return data
  }

  async patch (id, data, params) {
    return data
  }

  async remove (id, params) {
    return { id }
  }
}
