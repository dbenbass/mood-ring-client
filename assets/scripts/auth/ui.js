'use strict'
const store = require('../store.js')

const signUpSuccess = data => {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#change-password').hide()
  $('#signupemail').val('')
  $('#signuppassword').val('')
  $('#signuppasswordconfirm').val('')
  // console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = error => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#signupemail').val('')
  $('#signuppassword').val('')
  $('#signuppasswordconfirm').val('')
  // console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = data => {
  store.user = data.user
  // console.log(store.user)
  $('#message').text('Signed in successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#change-password').show()
  $('#sign-out').show()
  $('#group-create-div').show()
  $('#user-group-create-div').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#password').val('')
  $('#email').val('')
  $('#group-create').show()
  $('#groups-update').show()
  $('#group-delete').show()
  $('#group-index').show()
  $('#group-show').show()
  $('#user-group-create').show()
  $('#data').show()
  $('#groupmessage').html('')
  // console.log('signInSuccess ran. Data is :', data)
}

const signInFailure = error => {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#password').val('')
  $('#email').val('')
  // console.error('signInFailure ran. Error is :', error)
}

const changePasswordSuccess = data => {
  $('#message').text('Password changed successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#oldpassword').val('')
  $('#newpassword').val('')
  // console.log('changePasswordSuccess ran. Data is :', data)
}

const changePasswordFailure = error => {
  $('#message').text('Error on password change')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#oldpassword').val('')
  $('#newpassword').val('')
  // console.error('changePasswordFailure ran. Error is :', error)
}

const signOutSuccess = data => {
  $('#message').text('Signed out successfully')
  store.user = null
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log('signOutSuccess ran. Data is :', data)
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#change-password').hide()
  $('#group-create').hide()
  $('#groups-update').hide()
  $('#group-delete').hide()
  $('#group-index').hide()
  $('#group-show').hide()
  $('#user-group-create').hide()
  $('#data').html('')
  $('#groupmessage').html('')
  $('#deletemessage').html('')
  $('#showallmessage').html('')
}

const signOutFailure = error => {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.error('signOutFailure ran. Error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
