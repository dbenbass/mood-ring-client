'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
const groupEvents = require('./groups/events.js')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#group-create').on('submit', groupEvents.onCreateGroup)
  $('#mood-level').on('submit', groupEvents.onCreateMood)
  $('#user-group-create').on('submit', groupEvents.onCreateUserGroup)
  // $('#user-group-delete').on('submit', groupEvents.onDeleteUserGroup)
  $('#group-index').on('submit', groupEvents.onShowAllGroups)
  $('#group-delete').on('submit', groupEvents.onDeleteGroup)
  $('#groups-update').on('submit', groupEvents.onUpdateGroup)
  $('#group-show').on('submit', groupEvents.onShowOneGroup)
  $('#group-create-div').hide()
  $('#user-group-create-div').hide()
  $('.mood_id').hide()
  $('#group_id').click(function () {
    $('.mood_id').show()
    $('.group_id').hide()
  })

  // $('#scheme-index').on('submit', schemeEvents.onShowAllSchemes)
  // $('#scheme-delete').on('submit', schemeEvents.onDeleteScheme)
  // $('#scheme-show').on('submit', schemeEvents.onShowOneScheme)
  // schemeEvents.onShowAllSchemes()
})
