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
  const groupId = $(event.target).closest('section').data('id')
  return $.ajax({
    url: config.apiUrl + '/user_groups',
    group_id: groupId,
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

const showOwnerGroups = () => {
  return $.ajax({
    url: config.apiUrl + '/groups?owner_ring=true',
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

const deleteGroup = function (groupId) {
  return $.ajax({
    url: config.apiUrl + /groups/ + groupId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
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
//
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
//
// const updateGroup = function (groupId) {
//   return $.ajax({
//     url: config.apiUrl + /groups/ + groupId,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
module.exports = {
  createGroup,
  createUserGroup,
  createMood,
  showAllGroups,
  showOwnerGroups,
  deleteGroup,
  updateGroup,
  showOneGroup
  // deleteUserGroup
}
