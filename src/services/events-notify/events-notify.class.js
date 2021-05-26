const { GeneralError } = require('@feathersjs/errors')
const moment = require('moment')

/* eslint-disable no-unused-vars */
exports.EventsNotify = class EventsNotify {
  constructor (options, app) {
    this.options = options || {}
    this.eventModel = app.service('events').Model
    this.registerModel = app.service('register-event').Model
    this.sendEmailService = app.service('send-email')
  }

  async find (params) {
    try {
      const eventsData = await this.eventModel.find({ startDate: moment().startOf('day').add(3, 'day').add(7, 'hour').toDate() })
      for (let i = 0; i < eventsData.length; i++) {
        console.log('i : ', i)
        const event = eventsData[i]
        console.log('event : ', event)
        const registerData = await this.registerModel.find({ eventId: event._id })
        console.log('register : ', registerData)
        let email = ''
        registerData.map(register => {
          email += `,${register.registerEmail}`
        })
        email = email.slice(1, email.length)
        console.log('email : ', email)
        this.sendEmailService.create({
          email,
          subject: 'แจ้งเตือนกิจกรรมที่ใกล้ถึง',
          message: `กิจกรรม ${event.name} จะเริ่มในอีก 3 วันอย่าลืมมาร่วมกิจกรรมกันนะคะ`
        })
      }

      return true
    } catch (error) {
      throw new GeneralError(error)
    }
  }

  async get (id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    }
  }

  async create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)))
    }

    return data
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
