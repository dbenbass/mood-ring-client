'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createGroup = data => {
  return $.ajax({
    url: config.apiUrl + '/groups',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  createGroup
}
