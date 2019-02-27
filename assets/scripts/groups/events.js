'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onCreateGroup = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log('we are here')
  // take this data and send it to our server
  // using an HTTP request (POST)
  api.createGroup(data)
    .then(ui.createGroupSuccess) // if your request was succesful
    .catch(ui.createGroupFailure) // if your request failed
}

const onCreateMood = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log('we are here')
  // take this data and send it to our server
  // using an HTTP request (POST)
  api.createUserGroup(data)
    .then(ui.createMoodSuccess) // if your request was succesful
    .catch(ui.createMoodFailure) // if your request failed
}

const onShowAllGroups = (event) => {
  if (event) { event.preventDefault() }
  // console.log('get groups')
  // take this data and send it to our server
  // using an HTTP request (POST)
  api.showAllGroups()
    .then(ui.showAllGroupsSuccess) // if your request was succesful
    .catch(ui.showAllGroupsFailure) // if your request failed
}

const onShowOneGroup = event => {
  // console.log('get one group')
  event.preventDefault()
  const input = getFormFields(event.target)
  const oneObject = input
  api.showOneGroup(oneObject)
  // take this data and send it to our server
  // using an HTTP request (POST)
    .then(ui.showOneGroupSuccess) // if your request was succesful
    .catch(ui.showOneGroupFailure) // if your request failed
}

const onShowOwnerGroups = (event) => {
  if (event) { event.preventDefault() }
  console.log('owner groups')
  api.showOwnerGroups()
    .then(ui.showOwnerGroupsSuccess) // if your request was succesful
    .catch(ui.showOwnerGroupsFailure) // if your request failed
}
const onDeleteGroup = event => {
  event.preventDefault()
  const groupId = $(event.target).closest('section').data('id')
  // const input = getFormFields(event.target)
  console.log('delete group')
  // const data = input

  // take this data and send it to our server
  // using an HTTP request (POST)
  api.deleteGroup(groupId)
    .then(ui.deleteGroupSuccess) // if your request was succesful
    .catch(ui.deleteGroupFailure) // if your request failed
}

// const onDeleteGroup = event => {
//   event.preventDefault()
//   const input = getFormFields(event.target)
//   // console.log('delete group')
//   const data = input
//
//   // take this data and send it to our server
//   // using an HTTP request (POST)
//   api.deleteGroup(data)
//     .then(ui.deleteGroupSuccess) // if your request was succesful
//     .catch(ui.deleteGroupFailure) // if your request failed
// }

// const onDeleteUserGroup = event => {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   console.log('delete group')
//   const data = input
//   api.deleteUserGroup(data)
//     .then(ui.deleteUserGroupSuccess)
//     .catch(ui.deleteUserGroupFailure)
// }

const onCreateUserGroup = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  data.user_group.user_id = store.user.id
  const groupId = $(event.target).closest('section').data('id')
  $('#group_id_formfield').val($('group_id_formfield').val() + `${groupId}`)

  // console.log('we are here', data)
  // take this data and send it to our server
  // using an HTTP request (POST)
  api.createUserGroup(data)
    .then(ui.createUserGroupSuccess) // if your request was succesful
    .catch(ui.createUserGroupFailure) // if your request failed
}

const onUpdateGroup = function (event) {
  // console.log('update')
  event.preventDefault()
  const input = getFormFields(event.target)
  const groupObject = input
  api.updateGroup(groupObject)
    .then(function (response) {
      ui.updateGroupSuccess(response)
    })
    .catch(ui.updateGroupFailure)
}

const onUpdateGroupId = event => {
  event.preventDefault()
  const groupId = $(event.target).closest('section').data('id')
  // const input = getFormFields(event.target)
  console.log(groupId)
  $('#group-id-update').val($('#group-id-update').val() + `${groupId}`)
  // $('#group-id-update').val($('group-id-update').val(groupId) + groupId)

  // const data = input
}

const onCreateUserGroupId = event => {
  event.preventDefault()
  const groupId = $(event.target).closest('section').data('id')
  // const input = getFormFields(event.target)
  console.log(groupId)
  $('#group_id_formfield').val('').val($('#group_id_formfield').val() + `${groupId}`)
  $('#user-group-create-div').show()
  // $('#group-id-update').val($('group-id-update').val(groupId) + groupId)

  // const data = input
}

const addHandlers = () => {
  $('#data').on('click', '#deleteGroupsButton', onDeleteGroup)
  $('#data').on('click', '#updateGroupsButton', onUpdateGroupId)
  $('#data').on('click', '#joinGroupsButton', onCreateUserGroupId)
}

module.exports = {
  onCreateGroup,
  onCreateUserGroup,
  onCreateMood,
  onShowAllGroups,
  onDeleteGroup,
  onUpdateGroup,
  onShowOneGroup,
  onShowOwnerGroups,
  addHandlers
  // onDeleteUserGroup
}
