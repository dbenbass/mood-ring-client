'use strict'

const store = require('../store.js')
// const api = require('./api.js')

const createGroupSuccess = data => {
  store.group = data.group.id
  console.log(data.group.id)
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
  $('#ringname').val('')
  console.error('did not run. Data is :', data)
  console.log(data)
}

const createUserGroupSuccess = data => {
  store.user_groups = data.user_groups
  $('#groupmessage').text(`You've joined ${data.user_group.group.name}. The average mood in here is ${data.user_group.group.averagemood} `)

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

const showAllGroupsSuccess = data => {
  store.groups = data.groups
  // console.log(store.schemes)
  $('#message').text('You are currently viewing all schemes')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#data').html('')
  // add new schemes to top instead of bottom
  const allGroups = data.groups
  const allGroupsLoop = function (allGroups) {
    const groupsArray = []
    for (let i = 0; i <= allGroups.length; i++) {
      const groupPop = allGroups.pop()
      groupsArray.push(groupPop)
    }
    return groupsArray
  }

  allGroupsLoop(allGroups).forEach(group => {
    const groupHTML = (`
      <h1>${group.name}</h1>
      <p>ID: ${group.id}</p>
      <br>
      `)
    $('#data').append(groupHTML)
  })
}

module.exports = {
  createGroupSuccess,
  createGroupFailure,
  createUserGroupSuccess,
  createUserGroupFailure,
  createMoodFailure,
  createMoodSuccess,
  showAllGroupsSuccess
}
