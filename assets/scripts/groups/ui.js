'use strict'

const store = require('../store.js')
// const api = require('./api.js')

const createGroupSuccess = data => {
  store.groups = data.groups
  console.log(data.groups)
  $('#ringname').val('')

  // $('#message').text('Successfuly created scheme')
  // $('#message').removeClass()
  // $('#message').addClass('success')
  $('#groupmessage').text(`Your mood ring is called ${data.group.name}. Please enter ID ${data.group.id} to join the ring!`)
  console.log('createGroup ran. Data is :', data)

  // create a scheme and then run showAllSchemes
  // api.showUserGroup()
  //  .then(showUserGroupSuccess)
  //    .catch()
}
const createGroupFailure = data => {
  // $('#message').text('Failure on scheme create')
  // $('#message').removeClass()
  // $('#message').addClass('failure')
  console.error('did not run. Data is :', data)
  console.log(data)
}

const createUserGroupSuccess = data => {
  store.user_groups = data.user_groups
  console.log('createUserGroup ran. Data is :', data)
}

const createUserGroupFailure = data => {
  store.user_groups = data.user_groups
  console.error('createUserGroup did not run. Data is :', data)
}

const createMoodSuccess = data => {
  store.moods = data.moods
  console.log('createMood ran. Data is :', data)
}

const createMoodFailure = data => {
  store.moods = data.moods
  console.error('createMood did not run. Data is :', data)
}

module.exports = {
  createGroupSuccess,
  createGroupFailure,
  createUserGroupSuccess,
  createUserGroupFailure,
  createMoodFailure,
  createMoodSuccess
}
