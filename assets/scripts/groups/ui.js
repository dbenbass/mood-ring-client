'use strict'

const store = require('../store.js')
const api = require('./api.js')

const createGroupSuccess = data => {
  store.group = data.group.id
  console.log(data.group.id)
  $('#ringname').val('')
  $('#message').text('')
  $('#groupmessage').html(`Your mood ring is called ${data.group.name}. Please enter ID ${data.group.id} below to join the ring!`)
  console.log('createGroup ran. Data is :', data)
  api.showAllGroups()
}
const createGroupFailure = data => {
  // $('#message').text('Failure on scheme create')
  // $('#message').removeClass()
  // $('#message').addClass('failure')
  $('#ringname').val('')
  console.error('did not run. Data is :', data)
  console.log(data)
}

const deleteGroupSuccess = data => {
  $('#groupmessage').text('')
  $('#deletemessage').text(`mood ring was deleted.`)
  $('#deletemessage').removeClass()
  $('#deletemessage').addClass('success')
  $('#delete-input').val('')
  console.log('deleteScheme ran. Data is :', data)
  api.showAllGroups()
    .then(showAllGroupsSuccess)
}

const deleteGroupFailure = data => {
  $('#message').text('Error in deleting group')
  $('#deletemessage').removeClass()
  $('#deletemessage').addClass('success')
  $('#delete-input').val('')
  console.log('deleteScheme ran. Data is :', data)
  api.showAllGroups()
    .then(showAllGroupsSuccess)
}

const createUserGroupSuccess = data => {
  store.user_groups = data.user_groups
  $('#groupmessage').text(`You've joined ${data.user_group.group.name}. The average mood in here is ${data.user_group.group.averagemood}. ${data.user_group.group.numberofparticipants} `)
  $('#moodbox_id').val('')
  $('#message').text('')
  console.log('createUserGroup ran. Data is :', data)
  $('.mood_id').hide()
  $('.group_id').show()
  $('#group_id_formfield').val('')
}

const createUserGroupFailure = data => {
  store.user_groups = data.user_groups
  console.error('createUserGroup did not run. Data is :', data)
  $('.mood_id').hide()
  $('.group_id').show()
  $('#groupmessage').text(`Try again please`)
  $('#group_id_formfield').val('')
}

const createMoodSuccess = data => {
  store.moods = data.moods
  console.log('createMood ran. Data is :', data)
}

const createMoodFailure = data => {
  store.moods = data.moods
  console.error('createMood did not run. Data is :', data)
  $('#groupmessage').text(`Try again please`)

}

const showAllGroupsSuccess = data => {
  store.groups = data.groups
  // console.log(store.schemes)
  $('#message').html('You are currently viewing all rings')
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

const updateGroupSuccess = id => {
  store.groups = id.groups
  $('#group-name-update').val('')
  $('#groupmessage').text('Successfuly updated group')
  $('#submitmessage').removeClass()
  $('#submitmessage').addClass('success')
  console.log('updateScheme ran. Data is :', id)
  // update a group/s name and then run showallgroups
  api.showAllGroups()
    .then(showAllGroupsSuccess)
}

const updateGroupFailure = id => {
  store.groups = id.groups
  $('#group-name-update').val('')
  $('#groupmessage').text('You cannot edit this mood ring. Keep in mind that you can only do so if you are the creator of the ring.')
  $('#submitmessage').removeClass()
  $('#submitmessage').addClass('success')
  console.log('updateScheme ran. Data is :', id)
  // update a group/s name and then run showallgroups
  api.showAllGroups()
    .then(showAllGroupsSuccess)
  //    .catch()
}

const showOneGroupSuccess = function (group) {
  console.log(group.group)
  const groupHTML = (`
    <h1>${group.group.name}</h1>
    ${group.group.numberofparticipants} users belong to this ring. It's average mood is ${group.group.averagemood}.<br>
    ID: ${group.group.id}
    <br>
    `)
  $('#data').html(groupHTML)
}
module.exports = {
  createGroupSuccess,
  createGroupFailure,
  createUserGroupSuccess,
  createUserGroupFailure,
  createMoodFailure,
  createMoodSuccess,
  showAllGroupsSuccess,
  deleteGroupSuccess,
  deleteGroupFailure,
  updateGroupSuccess,
  updateGroupFailure,
  showOneGroupSuccess
}
