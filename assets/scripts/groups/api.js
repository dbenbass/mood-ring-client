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

const createUserGroup = data => {
  return $.ajax({
    url: config.apiUrl + '/user_groups',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const createMood = data => {
  return $.ajax({
    url: config.apiUrl + '/moods',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const showAllGroups = () => {
  return $.ajax({
    url: config.apiUrl + '/groups',
    method: 'GET'
  })
}

module.exports = {
  createGroup,
  createUserGroup,
  createMood,
  showAllGroups
}
