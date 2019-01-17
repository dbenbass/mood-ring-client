'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

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

const onCreateUserGroup = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  data.user_group.user_id = store.user.id
  console.log('we are here', data)
  // take this data and send it to our server
  // using an HTTP request (POST)
  api.createUserGroup(data)
    .then(ui.createUserGroupSuccess) // if your request was succesful
    .catch(ui.createUserGroupFailure) // if your request failed
}

const onCreateMood = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('we are here')
  // take this data and send it to our server
  // using an HTTP request (POST)
  api.createUserGroup(data)
    .then(ui.createMoodSuccess) // if your request was succesful
    .catch(ui.createMoodFailure) // if your request failed
}

const onShowAllGroups = (event) => {
  if (event) { event.preventDefault() }
  // const data = getFormFields(event.target)
  console.log('get groups')
  // take this data and send it to our server
  // using an HTTP request (POST)
  api.showAllGroups()
    .then(ui.showAllGroupsSuccess) // if your request was succesful
    .catch(ui.showAllGroupsFailure) // if your request failed
}

const onShowOneGroup = event => {
  console.log('get one group')
  event.preventDefault()
  const input = getFormFields(event.target)
  const oneObject = input
  api.showOneGroup(oneObject)
  // take this data and send it to our server
  // using an HTTP request (POST)
    .then(ui.showOneGroupSuccess) // if your request was succesful
    .catch(ui.showOneGroupFailure) // if your request failed
}

const onDeleteGroup = event => {
  event.preventDefault()
  const input = getFormFields(event.target)
  console.log('delete group')
  const data = input

  // take this data and send it to our server
  // using an HTTP request (POST)
  api.deleteGroup(data)
    .then(ui.deleteGroupSuccess) // if your request was succesful
    .catch(ui.deleteGroupFailure) // if your request failed
}

const onUpdateGroup = function (event) {
  console.log('update')
  event.preventDefault()
  const input = getFormFields(event.target)
  const groupObject = input
  api.updateGroup(groupObject)
    .then(function (response) {
      ui.updateGroupSuccess(response)
    })
    .catch(ui.updateGroupFailure)
}

module.exports = {
  onCreateGroup,
  onCreateUserGroup,
  onCreateMood,
  onShowAllGroups,
  onDeleteGroup,
  onUpdateGroup,
  onShowOneGroup
}
