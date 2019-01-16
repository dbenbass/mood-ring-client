'use strict'

const store = require('../store.js')
// const api = require('./api.js')

const createGroupSuccess = data => {
  store.groups = data.groups
  // $('#message').text('Successfuly created scheme')
  // $('#message').removeClass()
  // $('#message').addClass('success')
  console.log('createGroup ran. Data is :', data)
  // create a scheme and then run showAllSchemes
  // api.showAllSchemes()
  //  .then(showAllSchemesSuccess)
  //    .catch()
}

const createGroupFailure = data => {
  // $('#message').text('Failure on scheme create')
  // $('#message').removeClass()
  // $('#message').addClass('failure')
  console.error('did not run. Data is :', data)
  console.log(data)
}

module.exports = {
  createGroupSuccess,
  createGroupFailure
}
