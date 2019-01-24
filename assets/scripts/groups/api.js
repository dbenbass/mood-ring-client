'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createGroup = data => {
  return $.ajax({
    url: config.apiUrl + '/groups',
    user_id: store.user.id,
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
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showOneGroup = function (oneObject) {
  return $.ajax({
    url: config.apiUrl + `/groups/${oneObject.group.id}`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteGroup = function (data) {
  return $.ajax({
    url: config.apiUrl + `/groups/${data.group.id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
//
// const deleteUserGroup = function (data) {
//   return $.ajax({
//     url: config.apiUrl + `/user_groups/${data.group.id}`,
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: data
//   })
// }

const updateGroup = function (groupObject) {
  return $.ajax({
    url: config.apiUrl + `/groups/${groupObject.group.id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: groupObject
  })
}

module.exports = {
  createGroup,
  createUserGroup,
  createMood,
  showAllGroups,
  deleteGroup,
  updateGroup,
  showOneGroup
  // deleteUserGroup
}
