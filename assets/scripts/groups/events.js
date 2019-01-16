'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateGroup = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('we are here')
  // take this data and send it to our server
  // using an HTTP request (POST)
  api.createGroup(data)
    .then(ui.createGroupSuccess) // if your request was succesful
    .catch(ui.createGroupFailure) // if your request failed
}

module.exports = {
  onCreateGroup
}
