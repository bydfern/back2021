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
        service: 'hotmail',
        auth: {
          user: 'RethoEdis@hotmail.com',
          pass: 'Reth0Edi$666'
        }
      })
      const message = {
        to: data.email,
        subject: 'การตอบรับคำขอเข้าร่วมกิจกรรม',
        html: data.message
      }
      transporter.sendMail(message, (error, info) => {
        if (error) {
          console.log(error)
          throw error
        }

        return info
      })
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
