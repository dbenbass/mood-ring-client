'use strict'

const store = require('../store.js')
const api = require('./api.js')

const createGroupSuccess = data => {
  store.group = data.group.id
  // console.log(data.group.id)
  $('#ringname').val('')
  $('#message').text('')
  $('#updatemessage').val('')
  $('#groupmessage').html(`Your mood ring is called ${data.group.name}. Please enter ID ${data.group.id} below to join the ring!`)
  console.log('createGroup ran. Data is :', data)
  api.showAllGroups()
}
const createGroupFailure = data => {
  $('#groupmessage').html('Failure on group create')
  $('#ringname').val('')
  $('#updatemessage').val('')
}

const deleteGroupSuccess = data => {
  $('#groupmessage').text('')
  $('#updatemessage').text(`mood ring was deleted.`)
  $('#updatemessage').removeClass()
  $('#updatemessage').addClass('success')
  $('#delete-input').val('')
  $('#updatemessage').val('')
  // console.log('deleteScheme ran. Data is :', data)
  api.showAllGroups()
    .then(showAllGroupsSuccess)
}

const deleteGroupFailure = data => {
  $('#updatemessage').text('Error in deleting group')
  $('#deletemessage').removeClass()
  $('#deletemessage').addClass('success')
  $('#delete-input').val('')
  $('#updatemessage').val('')
  // console.log('deleteScheme ran. Data is :', data)
  api.showAllGroups()
    .then(showAllGroupsSuccess)
}

const createUserGroupSuccess = data => {
  store.user_groups = data.user_groups
  $('#groupmessage').text(`You've joined ${data.user_group.group.name}. The average mood in here is ${data.user_group.group.averagemood}. ${data.user_group.group.numberofparticipants} member(s) in this group. `)
  $('#moodbox_id').val('')
  $('#updatemessage').val('')
  $('#message').text('')
  console.log('createUserGroup ran. Data is :', data)
  $('.mood_id').hide()
  $('.group_id').show()
  $('#group_id_formfield').val('')
  //
  //
  // const day = data.user_group.group.averagemood.getDay;
  // switch (day) {
  //     case 1:
  //         console.log("Happy Monday!");
  //         break;
  //     case 2:
  //         console.log("It's Tuesday. You got this!");
  //         break;
  //     case 3:
  //         console.log("Hump day already!");
  //         break;
  //     case 4:
  //         console.log("Just one more day 'til the weekend!");
  //         break;
  //     case 5:
  //         console.log("Happy Friday!");
  //         break;
  //     case 6:
  //         console.log("Have a wonderful Saturday!");
  //         break;
  //     case 7:
  //         console.log("It's Sunday, time to relax!");
  //         break;
  //     default:
  //         console.log("Something went horribly wrong...");
const moodColor = Math.round(Number(data.user_group.group.averagemood))
console.log(moodColor)
console.log(typeof moodColor)
  switch (moodColor) {
    case 0:
      $('h5').removeClass().addClass('black')
      console.log('black')
      break
    case 1:
      $('h5').removeClass().addClass('grey')
      console.log('grey')
      break
    case 2:
      $('h5').removeClass().addClass('green')
      console.log('green')
      break
    case 3:
      $('h5').removeClass().addClass('midblue')
      console.log('midblue')
      break
    case 4:
      $('h5').removeClass().addClass('lightblue')
      console.log('lightblue')
      break
    case 5:
      $('h5').removeClass().addClass('lightbluegreen')
      console.log('lightbluegreen')
      break
    case 6:
      $('h5').removeClass().addClass('yellow')
      console.log('yellow')
      break
    case 7:
      $('h5').removeClass().addClass('orange')
      console.log('orange')
      break
    case 8:
      $('h5').removeClass().addClass('purple')
      console.log('purple')
      break
    case 9:
      $('h5').removeClass().addClass('pinkpurple')
      console.log('purple')
      break
    case 10:
      $('h5').removeClass().addClass('pinkorange')
      console.log('pinkorange')
      break

    default:
      $('h5').removeClass().addClass('linear-wipe')
      console.log('default')
      console.log('Something went horribly wrong...')
  }
}

const createUserGroupFailure = data => {
  store.user_groups = data.user_groups
  // console.error('createUserGroup did not run. Data is :', data)
  $('.mood_id').hide()
  $('.group_id').show()
  $('#groupmessage').text(`Try again please`)
  $('#group_id_formfield').val('')
  $('#updatemessage').val('')
}

const createMoodSuccess = data => {
  store.moods = data.moods
  // console.log('createMood ran. Data is :', data)
}

const createMoodFailure = data => {
  store.moods = data.moods
  // console.error('createMood did not run. Data is :', data)
}

const showAllGroupsSuccess = data => {
  store.groups = data.groups
  // console.log(store.schemes)
  console.log('showAllGroups ran. Data is :', data)
  $('#showallmessage').html('You are currently viewing all mood-rings')
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
      <p>Number of members: ${group.numberofparticipants}</p>
      <p>Mood: ${group.averagemood}</p>

      <br>
      `)
    $('#data').append(groupHTML)
  })
}

const showOwnerGroupsSuccess = (data) => {
  console.log('OwnerGroup', data)
  // store.user_groups = data.user_groups
  // const groupsAll = data.user_groups
  // const ownerGroups = []
  // groupsAll.forEach(function (user_group) {
  //   if (user_group.user.id === store.user.id) {
  //     ownerGroups.push(user_group)
  //   }
  //   const showOwnerGroupsHtml = (`
  //   <h1>${data.user_group.user.id}</h1>
  //   `)
  //   $('#data').append(showOwnerGroupsHtml)
  // })
}

const updateGroupSuccess = id => {
  store.groups = id.groups
  $('#group-id-update').val('')
  $('#name-update').val('')
  $('#updatemessage').text('Successfuly updated group')
  // console.log('updateScheme ran. Data is :', id)
  // update a group/s name and then run showallgroups
  api.showAllGroups()
    .then(showAllGroupsSuccess)
  //    .catch()
}

const updateGroupFailure = id => {
  store.groups = id.groups
  $('#group-id-update').val('')
  $('#name-update').val('')
  $('#updatemessage').text('Could not update the mood ring. Only ring owners can change names.')
  $('#submitmessage').removeClass()
  $('#submitmessage').addClass('success')
  // console.log('updateScheme ran. Data is :', id)
}

const showOneGroupSuccess = function (group) {
  const groupHTML = (`
    <h1>${group.group.name}</h1>
    <p>ID: ${group.group.id}</p>
    <p>Number of members: ${group.group.numberofparticipants}</p>
    <p>Average mood: ${group.group.averagemood}</p>
    <br>
    `)
  $('#data').html(groupHTML)
  $('#onemoodid').val('')
  $('#updatemessage').text('')
  $('#showallmessage').html(`You are currently viewing the mood ring "${group.group.name}"`)
}

const showOneGroupFailure = id => {
  store.groups = id.groups
  $('#group-id-update').val('')
  $('#name-update').val('')
  $('#updatemessage').val('')
  $('#message').text('Could not show that group. Please make sure that the ID number exists.')
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
  showOneGroupSuccess,
  showOneGroupFailure,
  showOwnerGroupsSuccess
  // showOwnerGroupsFailure
  // deleteUserGroupSuccess
}
